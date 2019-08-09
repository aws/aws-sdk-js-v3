import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLoggingOptions } from "../model/GetLoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoggingOptionsInput } from "../types/GetLoggingOptionsInput";
import { GetLoggingOptionsOutput } from "../types/GetLoggingOptionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetLoggingOptionsInput";
export * from "../types/GetLoggingOptionsOutput";
export * from "../types/GetLoggingOptionsExceptionsUnion";

export class GetLoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoggingOptionsInput,
      OutputTypesUnion,
      GetLoggingOptionsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoggingOptionsInput,
    GetLoggingOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLoggingOptionsInput, GetLoggingOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoggingOptionsInput, GetLoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
