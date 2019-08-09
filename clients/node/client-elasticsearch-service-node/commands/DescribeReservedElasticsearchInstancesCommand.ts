import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedElasticsearchInstances } from "../model/DescribeReservedElasticsearchInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedElasticsearchInstancesInput } from "../types/DescribeReservedElasticsearchInstancesInput";
import { DescribeReservedElasticsearchInstancesOutput } from "../types/DescribeReservedElasticsearchInstancesOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeReservedElasticsearchInstancesInput";
export * from "../types/DescribeReservedElasticsearchInstancesOutput";
export * from "../types/DescribeReservedElasticsearchInstancesExceptionsUnion";

export class DescribeReservedElasticsearchInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedElasticsearchInstancesInput,
      OutputTypesUnion,
      DescribeReservedElasticsearchInstancesOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedElasticsearchInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedElasticsearchInstancesInput,
    DescribeReservedElasticsearchInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedElasticsearchInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedElasticsearchInstancesInput,
    DescribeReservedElasticsearchInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedElasticsearchInstancesInput,
        DescribeReservedElasticsearchInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
