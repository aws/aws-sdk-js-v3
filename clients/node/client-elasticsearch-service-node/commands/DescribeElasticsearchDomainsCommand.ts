import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeElasticsearchDomains } from "../model/DescribeElasticsearchDomains";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticsearchDomainsInput } from "../types/DescribeElasticsearchDomainsInput";
import { DescribeElasticsearchDomainsOutput } from "../types/DescribeElasticsearchDomainsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeElasticsearchDomainsInput";
export * from "../types/DescribeElasticsearchDomainsOutput";
export * from "../types/DescribeElasticsearchDomainsExceptionsUnion";

export class DescribeElasticsearchDomainsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticsearchDomainsInput,
      OutputTypesUnion,
      DescribeElasticsearchDomainsOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeElasticsearchDomains;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticsearchDomainsInput,
    DescribeElasticsearchDomainsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeElasticsearchDomainsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticsearchDomainsInput,
    DescribeElasticsearchDomainsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticsearchDomainsInput,
        DescribeElasticsearchDomainsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
