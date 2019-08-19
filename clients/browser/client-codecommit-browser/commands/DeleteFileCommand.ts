import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFile } from "../model/operations/DeleteFile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFileInput } from "../types/DeleteFileInput";
import { DeleteFileOutput } from "../types/DeleteFileOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DeleteFileInput";
export * from "../types/DeleteFileOutput";
export * from "../types/DeleteFileExceptionsUnion";

export class DeleteFileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFileInput,
      OutputTypesUnion,
      DeleteFileOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFileInput,
    DeleteFileOutput,
    Blob
  >();

  constructor(readonly input: DeleteFileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFileInput, DeleteFileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFileInput, DeleteFileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
