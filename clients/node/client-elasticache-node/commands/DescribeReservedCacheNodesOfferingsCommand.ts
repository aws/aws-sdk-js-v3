import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedCacheNodesOfferings } from "../model/DescribeReservedCacheNodesOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedCacheNodesOfferingsInput } from "../types/DescribeReservedCacheNodesOfferingsInput";
import { DescribeReservedCacheNodesOfferingsOutput } from "../types/DescribeReservedCacheNodesOfferingsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeReservedCacheNodesOfferingsInput";
export * from "../types/DescribeReservedCacheNodesOfferingsOutput";
export * from "../types/DescribeReservedCacheNodesOfferingsExceptionsUnion";

export class DescribeReservedCacheNodesOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedCacheNodesOfferingsInput,
      OutputTypesUnion,
      DescribeReservedCacheNodesOfferingsOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedCacheNodesOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedCacheNodesOfferingsInput,
    DescribeReservedCacheNodesOfferingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedCacheNodesOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedCacheNodesOfferingsInput,
    DescribeReservedCacheNodesOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedCacheNodesOfferingsInput,
        DescribeReservedCacheNodesOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
