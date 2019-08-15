import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeElasticsearchDomain } from "../model/operations/DescribeElasticsearchDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticsearchDomainInput } from "../types/DescribeElasticsearchDomainInput";
import { DescribeElasticsearchDomainOutput } from "../types/DescribeElasticsearchDomainOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeElasticsearchDomainInput";
export * from "../types/DescribeElasticsearchDomainOutput";
export * from "../types/DescribeElasticsearchDomainExceptionsUnion";

export class DescribeElasticsearchDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticsearchDomainInput,
      OutputTypesUnion,
      DescribeElasticsearchDomainOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeElasticsearchDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticsearchDomainInput,
    DescribeElasticsearchDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeElasticsearchDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticsearchDomainInput,
    DescribeElasticsearchDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticsearchDomainInput,
        DescribeElasticsearchDomainOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
