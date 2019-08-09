import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFileShare } from "../model/DeleteFileShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFileShareInput } from "../types/DeleteFileShareInput";
import { DeleteFileShareOutput } from "../types/DeleteFileShareOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteFileShareInput";
export * from "../types/DeleteFileShareOutput";
export * from "../types/DeleteFileShareExceptionsUnion";

export class DeleteFileShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFileShareInput,
      OutputTypesUnion,
      DeleteFileShareOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFileShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFileShareInput,
    DeleteFileShareOutput,
    Blob
  >();

  constructor(readonly input: DeleteFileShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFileShareInput, DeleteFileShareOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFileShareInput, DeleteFileShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
