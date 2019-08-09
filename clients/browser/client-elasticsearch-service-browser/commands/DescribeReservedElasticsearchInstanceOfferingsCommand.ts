import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedElasticsearchInstanceOfferings } from "../model/DescribeReservedElasticsearchInstanceOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedElasticsearchInstanceOfferingsInput } from "../types/DescribeReservedElasticsearchInstanceOfferingsInput";
import { DescribeReservedElasticsearchInstanceOfferingsOutput } from "../types/DescribeReservedElasticsearchInstanceOfferingsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeReservedElasticsearchInstanceOfferingsInput";
export * from "../types/DescribeReservedElasticsearchInstanceOfferingsOutput";
export * from "../types/DescribeReservedElasticsearchInstanceOfferingsExceptionsUnion";

export class DescribeReservedElasticsearchInstanceOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedElasticsearchInstanceOfferingsInput,
      OutputTypesUnion,
      DescribeReservedElasticsearchInstanceOfferingsOutput,
      ElasticsearchServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeReservedElasticsearchInstanceOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedElasticsearchInstanceOfferingsInput,
    DescribeReservedElasticsearchInstanceOfferingsOutput,
    Blob
  >();

  constructor(
    readonly input: DescribeReservedElasticsearchInstanceOfferingsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedElasticsearchInstanceOfferingsInput,
    DescribeReservedElasticsearchInstanceOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedElasticsearchInstanceOfferingsInput,
        DescribeReservedElasticsearchInstanceOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
