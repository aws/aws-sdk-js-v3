import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetV2LoggingOptions } from "../model/operations/GetV2LoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetV2LoggingOptionsInput } from "../types/GetV2LoggingOptionsInput";
import { GetV2LoggingOptionsOutput } from "../types/GetV2LoggingOptionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetV2LoggingOptionsInput";
export * from "../types/GetV2LoggingOptionsOutput";
export * from "../types/GetV2LoggingOptionsExceptionsUnion";

export class GetV2LoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetV2LoggingOptionsInput,
      OutputTypesUnion,
      GetV2LoggingOptionsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = GetV2LoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetV2LoggingOptionsInput,
    GetV2LoggingOptionsOutput,
    Blob
  >();

  constructor(readonly input: GetV2LoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetV2LoggingOptionsInput,
    GetV2LoggingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetV2LoggingOptionsInput, GetV2LoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
