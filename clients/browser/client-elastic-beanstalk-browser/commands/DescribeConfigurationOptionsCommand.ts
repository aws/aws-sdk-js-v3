import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationOptions } from "../model/operations/DescribeConfigurationOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationOptionsInput } from "../types/DescribeConfigurationOptionsInput";
import { DescribeConfigurationOptionsOutput } from "../types/DescribeConfigurationOptionsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeConfigurationOptionsInput";
export * from "../types/DescribeConfigurationOptionsOutput";
export * from "../types/DescribeConfigurationOptionsExceptionsUnion";

export class DescribeConfigurationOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationOptionsInput,
      OutputTypesUnion,
      DescribeConfigurationOptionsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfigurationOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationOptionsInput,
    DescribeConfigurationOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationOptionsInput,
    DescribeConfigurationOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationOptionsInput,
        DescribeConfigurationOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
