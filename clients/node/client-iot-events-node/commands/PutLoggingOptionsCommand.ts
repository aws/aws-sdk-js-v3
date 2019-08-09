import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutLoggingOptions } from "../model/PutLoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLoggingOptionsInput } from "../types/PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "../types/PutLoggingOptionsOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/PutLoggingOptionsInput";
export * from "../types/PutLoggingOptionsOutput";
export * from "../types/PutLoggingOptionsExceptionsUnion";

export class PutLoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLoggingOptionsInput,
      OutputTypesUnion,
      PutLoggingOptionsOutput,
      IoTEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutLoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLoggingOptionsInput,
    PutLoggingOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutLoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutLoggingOptionsInput, PutLoggingOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLoggingOptionsInput, PutLoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
