import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateServiceAction } from "../model/CreateServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServiceActionInput } from "../types/CreateServiceActionInput";
import { CreateServiceActionOutput } from "../types/CreateServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateServiceActionInput";
export * from "../types/CreateServiceActionOutput";
export * from "../types/CreateServiceActionExceptionsUnion";

export class CreateServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServiceActionInput,
      OutputTypesUnion,
      CreateServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServiceActionInput,
    CreateServiceActionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateServiceActionInput,
    CreateServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateServiceActionInput, CreateServiceActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
