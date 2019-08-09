import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFileSystem } from "../model/DeleteFileSystem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFileSystemInput } from "../types/DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "../types/DeleteFileSystemOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DeleteFileSystemInput";
export * from "../types/DeleteFileSystemOutput";
export * from "../types/DeleteFileSystemExceptionsUnion";

export class DeleteFileSystemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFileSystemInput,
      OutputTypesUnion,
      DeleteFileSystemOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFileSystem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFileSystemInput,
    DeleteFileSystemOutput,
    Blob
  >();

  constructor(readonly input: DeleteFileSystemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFileSystemInput, DeleteFileSystemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFileSystemInput, DeleteFileSystemOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
