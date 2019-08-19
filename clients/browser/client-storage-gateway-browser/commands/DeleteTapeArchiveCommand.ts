import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTapeArchive } from "../model/operations/DeleteTapeArchive";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTapeArchiveInput } from "../types/DeleteTapeArchiveInput";
import { DeleteTapeArchiveOutput } from "../types/DeleteTapeArchiveOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteTapeArchiveInput";
export * from "../types/DeleteTapeArchiveOutput";
export * from "../types/DeleteTapeArchiveExceptionsUnion";

export class DeleteTapeArchiveCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTapeArchiveInput,
      OutputTypesUnion,
      DeleteTapeArchiveOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTapeArchive;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTapeArchiveInput,
    DeleteTapeArchiveOutput,
    Blob
  >();

  constructor(readonly input: DeleteTapeArchiveInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTapeArchiveInput, DeleteTapeArchiveOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTapeArchiveInput, DeleteTapeArchiveOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
