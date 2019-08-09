import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEndpointWeightsAndCapacities } from "../model/UpdateEndpointWeightsAndCapacities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEndpointWeightsAndCapacitiesInput } from "../types/UpdateEndpointWeightsAndCapacitiesInput";
import { UpdateEndpointWeightsAndCapacitiesOutput } from "../types/UpdateEndpointWeightsAndCapacitiesOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/UpdateEndpointWeightsAndCapacitiesInput";
export * from "../types/UpdateEndpointWeightsAndCapacitiesOutput";
export * from "../types/UpdateEndpointWeightsAndCapacitiesExceptionsUnion";

export class UpdateEndpointWeightsAndCapacitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEndpointWeightsAndCapacitiesInput,
      OutputTypesUnion,
      UpdateEndpointWeightsAndCapacitiesOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateEndpointWeightsAndCapacities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEndpointWeightsAndCapacitiesInput,
    UpdateEndpointWeightsAndCapacitiesOutput,
    Blob
  >();

  constructor(readonly input: UpdateEndpointWeightsAndCapacitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEndpointWeightsAndCapacitiesInput,
    UpdateEndpointWeightsAndCapacitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateEndpointWeightsAndCapacitiesInput,
        UpdateEndpointWeightsAndCapacitiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
