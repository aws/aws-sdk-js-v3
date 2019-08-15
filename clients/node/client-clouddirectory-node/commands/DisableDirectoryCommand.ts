import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableDirectory } from "../model/operations/DisableDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableDirectoryInput } from "../types/DisableDirectoryInput";
import { DisableDirectoryOutput } from "../types/DisableDirectoryOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DisableDirectoryInput";
export * from "../types/DisableDirectoryOutput";
export * from "../types/DisableDirectoryExceptionsUnion";

export class DisableDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableDirectoryInput,
      OutputTypesUnion,
      DisableDirectoryOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableDirectoryInput,
    DisableDirectoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableDirectoryInput, DisableDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableDirectoryInput, DisableDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
