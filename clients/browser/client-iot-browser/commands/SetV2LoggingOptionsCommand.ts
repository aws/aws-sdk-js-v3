import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetV2LoggingOptions } from "../model/SetV2LoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetV2LoggingOptionsInput } from "../types/SetV2LoggingOptionsInput";
import { SetV2LoggingOptionsOutput } from "../types/SetV2LoggingOptionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SetV2LoggingOptionsInput";
export * from "../types/SetV2LoggingOptionsOutput";
export * from "../types/SetV2LoggingOptionsExceptionsUnion";

export class SetV2LoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetV2LoggingOptionsInput,
      OutputTypesUnion,
      SetV2LoggingOptionsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = SetV2LoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetV2LoggingOptionsInput,
    SetV2LoggingOptionsOutput,
    Blob
  >();

  constructor(readonly input: SetV2LoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetV2LoggingOptionsInput,
    SetV2LoggingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetV2LoggingOptionsInput, SetV2LoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
