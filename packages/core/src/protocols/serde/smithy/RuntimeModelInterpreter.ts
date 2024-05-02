import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command } from "@smithy/smithy-client";
import type {
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  RuleSetObject,
  SerdeContext,
} from "@smithy/types";

import {
  ISmithyModel,
  ISmithyModelServiceShape,
  ISmithyModelShape,
  ISmithyModelShapeId,
  SmithyModel,
} from "./SmithyModel";

export abstract class RuntimeModelInterpreter {
  /**
   * The Smithy JSON model data. May be in compressed form.
   */
  public model: SmithyModel;

  /**
   * Used to map endpoint ruleset parameters to implementation names.
   */
  protected abstract parameterNameMap: Record<string, string>;

  protected constructor(model: ISmithyModel) {
    this.model = SmithyModel.from(model);
  }

  /**
   * Implemented by extending classes of a concrete protocol.
   */
  public abstract serialize<I>(
    input: I,
    operationShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<IHttpRequest>;

  /**
   * Implemented by extending classes of a concrete protocol.
   */
  public abstract deserialize<O>(
    httpResponse: IHttpResponse,
    operationShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<O>;

  /**
   * Retrieves a shape by its id.
   * @param id - of the shape to be retrieved.
   */
  public getShape<T extends ISmithyModelShape>(id: ISmithyModelShapeId): T {
    const shape = this.model.shapes[id];
    if (!shape) {
      throw new Error("shape not found: " + id);
    }
    return shape as T;
  }

  /**
   * Retrieves the service shape from the model.
   */
  public getServiceShape(): ISmithyModelServiceShape {
    return Object.values(this.model.shapes).find((shape) => shape.type === "service") as ISmithyModelServiceShape;
  }

  /**
   * Retrieves the endpoint ruleset object.
   */
  public getEndpointRuleSet(): RuleSetObject {
    const service = this.getServiceShape();
    if (!service.traits["smithy.rules#endpointRuleSet"]) {
      throw new Error("@smithy/core: service does not have endpointRuleSet trait.");
    }
    return service.traits["smithy.rules#endpointRuleSet"];
  }

  /**
   * Creates a command constructor given the operation's shape id.
   * @param operationShapeId
   */
  public createCommand<I, O>(operationShapeId: ISmithyModelShapeId) {
    const operation = this.getShape(operationShapeId);
    const service = this.getServiceShape();
    const ruleset = this.getEndpointRuleSet();
    const operationName = operationShapeId.split("#")[1];
    const sdkId = service.traits["aws.api#service"]!.sdkId;

    return Command.classBuilder<I, O, any, any, any>()
      .ep(
        (() => {
          const parameters: EndpointParameterInstructions = {};
          for (const [name, parameterMetadata] of Object.entries(ruleset.parameters)) {
            parameters[name] = {
              type: parameterMetadata.builtIn ? "builtInParams" : "clientContextParams",
              name: this.parameterNameMap[name as string] ?? name[0].toLowerCase() + name.slice(1),
            } as EndpointParameterInstructions[""];
          }
          // TODO: context params and static context params from this operation.
          return parameters;
        })()
      )
      .m(function (this: any, Command: any, cs: any, config: any) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        ];
      })
      .s(sdkId, operationName[1], {})
      .n(sdkId + "Client", operationName[1] + "Command")
      .f(
        (_) => _,
        (_) => _
      )
      .ser((input, context) => this.serialize(input, operationShapeId, context))
      .de((httpResponse, context) => this.deserialize(httpResponse, operationShapeId, context))
      .build();
  }
}
