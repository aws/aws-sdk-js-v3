import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UnshareDirectory } from "../model/UnshareDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnshareDirectoryInput } from "../types/UnshareDirectoryInput";
import { UnshareDirectoryOutput } from "../types/UnshareDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/UnshareDirectoryInput";
export * from "../types/UnshareDirectoryOutput";
export * from "../types/UnshareDirectoryExceptionsUnion";

export class UnshareDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnshareDirectoryInput,
      OutputTypesUnion,
      UnshareDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UnshareDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnshareDirectoryInput,
    UnshareDirectoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: UnshareDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<UnshareDirectoryInput, UnshareDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnshareDirectoryInput, UnshareDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
