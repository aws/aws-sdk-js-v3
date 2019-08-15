import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeJobQueues } from "../model/operations/DescribeJobQueues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobQueuesInput } from "../types/DescribeJobQueuesInput";
import { DescribeJobQueuesOutput } from "../types/DescribeJobQueuesOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DescribeJobQueuesInput";
export * from "../types/DescribeJobQueuesOutput";
export * from "../types/DescribeJobQueuesExceptionsUnion";

export class DescribeJobQueuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobQueuesInput,
      OutputTypesUnion,
      DescribeJobQueuesOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeJobQueues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobQueuesInput,
    DescribeJobQueuesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeJobQueuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeJobQueuesInput, DescribeJobQueuesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobQueuesInput, DescribeJobQueuesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
