import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateConfigurationItemsToApplication } from "../model/AssociateConfigurationItemsToApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateConfigurationItemsToApplicationInput } from "../types/AssociateConfigurationItemsToApplicationInput";
import { AssociateConfigurationItemsToApplicationOutput } from "../types/AssociateConfigurationItemsToApplicationOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/AssociateConfigurationItemsToApplicationInput";
export * from "../types/AssociateConfigurationItemsToApplicationOutput";
export * from "../types/AssociateConfigurationItemsToApplicationExceptionsUnion";

export class AssociateConfigurationItemsToApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateConfigurationItemsToApplicationInput,
      OutputTypesUnion,
      AssociateConfigurationItemsToApplicationOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateConfigurationItemsToApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateConfigurationItemsToApplicationInput,
    AssociateConfigurationItemsToApplicationOutput,
    Blob
  >();

  constructor(readonly input: AssociateConfigurationItemsToApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateConfigurationItemsToApplicationInput,
    AssociateConfigurationItemsToApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateConfigurationItemsToApplicationInput,
        AssociateConfigurationItemsToApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
