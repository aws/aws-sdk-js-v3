import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableDirectory } from "../model/EnableDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableDirectoryInput } from "../types/EnableDirectoryInput";
import { EnableDirectoryOutput } from "../types/EnableDirectoryOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/EnableDirectoryInput";
export * from "../types/EnableDirectoryOutput";
export * from "../types/EnableDirectoryExceptionsUnion";

export class EnableDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableDirectoryInput,
      OutputTypesUnion,
      EnableDirectoryOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableDirectoryInput,
    EnableDirectoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableDirectoryInput, EnableDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableDirectoryInput, EnableDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
