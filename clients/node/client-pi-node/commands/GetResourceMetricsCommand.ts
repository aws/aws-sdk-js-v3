import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResourceMetrics } from "../model/GetResourceMetrics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceMetricsInput } from "../types/GetResourceMetricsInput";
import { GetResourceMetricsOutput } from "../types/GetResourceMetricsOutput";
import { PIResolvedConfiguration } from "../PIConfiguration";
export * from "../types/GetResourceMetricsInput";
export * from "../types/GetResourceMetricsOutput";
export * from "../types/GetResourceMetricsExceptionsUnion";

export class GetResourceMetricsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceMetricsInput,
      OutputTypesUnion,
      GetResourceMetricsOutput,
      PIResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResourceMetrics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceMetricsInput,
    GetResourceMetricsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResourceMetricsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PIResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceMetricsInput,
    GetResourceMetricsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceMetricsInput, GetResourceMetricsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
