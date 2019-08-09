import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLoggingOptions } from "../model/SetLoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLoggingOptionsInput } from "../types/SetLoggingOptionsInput";
import { SetLoggingOptionsOutput } from "../types/SetLoggingOptionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SetLoggingOptionsInput";
export * from "../types/SetLoggingOptionsOutput";
export * from "../types/SetLoggingOptionsExceptionsUnion";

export class SetLoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLoggingOptionsInput,
      OutputTypesUnion,
      SetLoggingOptionsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = SetLoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLoggingOptionsInput,
    SetLoggingOptionsOutput,
    Blob
  >();

  constructor(readonly input: SetLoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<SetLoggingOptionsInput, SetLoggingOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetLoggingOptionsInput, SetLoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
