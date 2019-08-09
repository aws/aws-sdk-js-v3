import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEvents } from "../model/DescribeEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventsInput } from "../types/DescribeEventsInput";
import { DescribeEventsOutput } from "../types/DescribeEventsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeEventsInput";
export * from "../types/DescribeEventsOutput";
export * from "../types/DescribeEventsExceptionsUnion";

export class DescribeEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventsInput,
      OutputTypesUnion,
      DescribeEventsOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventsInput,
    DescribeEventsOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeEventsInput, DescribeEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventsInput, DescribeEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
