import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePendingAggregationRequests } from "../model/operations/DescribePendingAggregationRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePendingAggregationRequestsInput } from "../types/DescribePendingAggregationRequestsInput";
import { DescribePendingAggregationRequestsOutput } from "../types/DescribePendingAggregationRequestsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribePendingAggregationRequestsInput";
export * from "../types/DescribePendingAggregationRequestsOutput";
export * from "../types/DescribePendingAggregationRequestsExceptionsUnion";

export class DescribePendingAggregationRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePendingAggregationRequestsInput,
      OutputTypesUnion,
      DescribePendingAggregationRequestsOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePendingAggregationRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePendingAggregationRequestsInput,
    DescribePendingAggregationRequestsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePendingAggregationRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePendingAggregationRequestsInput,
    DescribePendingAggregationRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePendingAggregationRequestsInput,
        DescribePendingAggregationRequestsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
