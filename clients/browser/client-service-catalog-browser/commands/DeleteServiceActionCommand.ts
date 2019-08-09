import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServiceAction } from "../model/DeleteServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServiceActionInput } from "../types/DeleteServiceActionInput";
import { DeleteServiceActionOutput } from "../types/DeleteServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteServiceActionInput";
export * from "../types/DeleteServiceActionOutput";
export * from "../types/DeleteServiceActionExceptionsUnion";

export class DeleteServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServiceActionInput,
      OutputTypesUnion,
      DeleteServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServiceActionInput,
    DeleteServiceActionOutput,
    Blob
  >();

  constructor(readonly input: DeleteServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServiceActionInput,
    DeleteServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServiceActionInput, DeleteServiceActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
