import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ShareDirectory } from "../model/ShareDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ShareDirectoryInput } from "../types/ShareDirectoryInput";
import { ShareDirectoryOutput } from "../types/ShareDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ShareDirectoryInput";
export * from "../types/ShareDirectoryOutput";
export * from "../types/ShareDirectoryExceptionsUnion";

export class ShareDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ShareDirectoryInput,
      OutputTypesUnion,
      ShareDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ShareDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ShareDirectoryInput,
    ShareDirectoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: ShareDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ShareDirectoryInput, ShareDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ShareDirectoryInput, ShareDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
