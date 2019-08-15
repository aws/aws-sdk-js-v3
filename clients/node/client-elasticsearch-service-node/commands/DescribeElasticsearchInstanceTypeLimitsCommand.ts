import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeElasticsearchInstanceTypeLimits } from "../model/operations/DescribeElasticsearchInstanceTypeLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticsearchInstanceTypeLimitsInput } from "../types/DescribeElasticsearchInstanceTypeLimitsInput";
import { DescribeElasticsearchInstanceTypeLimitsOutput } from "../types/DescribeElasticsearchInstanceTypeLimitsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeElasticsearchInstanceTypeLimitsInput";
export * from "../types/DescribeElasticsearchInstanceTypeLimitsOutput";
export * from "../types/DescribeElasticsearchInstanceTypeLimitsExceptionsUnion";

export class DescribeElasticsearchInstanceTypeLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticsearchInstanceTypeLimitsInput,
      OutputTypesUnion,
      DescribeElasticsearchInstanceTypeLimitsOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeElasticsearchInstanceTypeLimits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticsearchInstanceTypeLimitsInput,
    DescribeElasticsearchInstanceTypeLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeElasticsearchInstanceTypeLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticsearchInstanceTypeLimitsInput,
    DescribeElasticsearchInstanceTypeLimitsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticsearchInstanceTypeLimitsInput,
        DescribeElasticsearchInstanceTypeLimitsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
