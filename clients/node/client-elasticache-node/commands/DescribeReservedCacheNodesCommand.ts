import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedCacheNodes } from "../model/operations/DescribeReservedCacheNodes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedCacheNodesInput } from "../types/DescribeReservedCacheNodesInput";
import { DescribeReservedCacheNodesOutput } from "../types/DescribeReservedCacheNodesOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeReservedCacheNodesInput";
export * from "../types/DescribeReservedCacheNodesOutput";
export * from "../types/DescribeReservedCacheNodesExceptionsUnion";

export class DescribeReservedCacheNodesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedCacheNodesInput,
      OutputTypesUnion,
      DescribeReservedCacheNodesOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedCacheNodes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedCacheNodesInput,
    DescribeReservedCacheNodesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedCacheNodesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedCacheNodesInput,
    DescribeReservedCacheNodesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedCacheNodesInput,
        DescribeReservedCacheNodesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
