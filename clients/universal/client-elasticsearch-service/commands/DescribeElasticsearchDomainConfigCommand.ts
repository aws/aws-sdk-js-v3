import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeElasticsearchDomainConfig } from "../model/DescribeElasticsearchDomainConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticsearchDomainConfigInput } from "../types/DescribeElasticsearchDomainConfigInput";
import { DescribeElasticsearchDomainConfigOutput } from "../types/DescribeElasticsearchDomainConfigOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeElasticsearchDomainConfigInput";
export * from "../types/DescribeElasticsearchDomainConfigOutput";
export * from "../types/DescribeElasticsearchDomainConfigExceptionsUnion";

export class DescribeElasticsearchDomainConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticsearchDomainConfigInput,
      OutputTypesUnion,
      DescribeElasticsearchDomainConfigOutput,
      ElasticsearchServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeElasticsearchDomainConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticsearchDomainConfigInput,
    DescribeElasticsearchDomainConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeElasticsearchDomainConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticsearchDomainConfigInput,
    DescribeElasticsearchDomainConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticsearchDomainConfigInput,
        DescribeElasticsearchDomainConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
