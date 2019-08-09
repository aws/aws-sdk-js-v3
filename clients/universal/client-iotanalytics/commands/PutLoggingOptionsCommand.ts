import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLoggingOptions } from "../model/PutLoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLoggingOptionsInput } from "../types/PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "../types/PutLoggingOptionsOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
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
      IoTAnalyticsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutLoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLoggingOptionsInput,
    PutLoggingOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: PutLoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTAnalyticsResolvedConfiguration
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
