import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDirectory } from "../model/operations/DeleteDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectoryInput } from "../types/DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "../types/DeleteDirectoryOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DeleteDirectoryInput";
export * from "../types/DeleteDirectoryOutput";
export * from "../types/DeleteDirectoryExceptionsUnion";

export class DeleteDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectoryInput,
      OutputTypesUnion,
      DeleteDirectoryOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectoryInput,
    DeleteDirectoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDirectoryInput, DeleteDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDirectoryInput, DeleteDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
