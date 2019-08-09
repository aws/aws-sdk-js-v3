import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGateway } from "../model/DeleteGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGatewayInput } from "../types/DeleteGatewayInput";
import { DeleteGatewayOutput } from "../types/DeleteGatewayOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteGatewayInput";
export * from "../types/DeleteGatewayOutput";
export * from "../types/DeleteGatewayExceptionsUnion";

export class DeleteGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGatewayInput,
      OutputTypesUnion,
      DeleteGatewayOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGatewayInput,
    DeleteGatewayOutput,
    Blob
  >();

  constructor(readonly input: DeleteGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGatewayInput, DeleteGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGatewayInput, DeleteGatewayOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
