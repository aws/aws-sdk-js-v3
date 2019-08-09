import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartAccessLogging } from "../model/StartAccessLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAccessLoggingInput } from "../types/StartAccessLoggingInput";
import { StartAccessLoggingOutput } from "../types/StartAccessLoggingOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/StartAccessLoggingInput";
export * from "../types/StartAccessLoggingOutput";
export * from "../types/StartAccessLoggingExceptionsUnion";

export class StartAccessLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAccessLoggingInput,
      OutputTypesUnion,
      StartAccessLoggingOutput,
      MediaStoreResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartAccessLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAccessLoggingInput,
    StartAccessLoggingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartAccessLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAccessLoggingInput,
    StartAccessLoggingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartAccessLoggingInput, StartAccessLoggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
