import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopAccessLogging } from "../model/StopAccessLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopAccessLoggingInput } from "../types/StopAccessLoggingInput";
import { StopAccessLoggingOutput } from "../types/StopAccessLoggingOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/StopAccessLoggingInput";
export * from "../types/StopAccessLoggingOutput";
export * from "../types/StopAccessLoggingExceptionsUnion";

export class StopAccessLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopAccessLoggingInput,
      OutputTypesUnion,
      StopAccessLoggingOutput,
      MediaStoreResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopAccessLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopAccessLoggingInput,
    StopAccessLoggingOutput,
    Uint8Array
  >();

  constructor(readonly input: StopAccessLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<StopAccessLoggingInput, StopAccessLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopAccessLoggingInput, StopAccessLoggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
