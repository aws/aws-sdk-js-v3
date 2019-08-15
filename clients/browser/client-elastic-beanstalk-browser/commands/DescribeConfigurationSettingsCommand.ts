import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationSettings } from "../model/operations/DescribeConfigurationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationSettingsInput } from "../types/DescribeConfigurationSettingsInput";
import { DescribeConfigurationSettingsOutput } from "../types/DescribeConfigurationSettingsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeConfigurationSettingsInput";
export * from "../types/DescribeConfigurationSettingsOutput";
export * from "../types/DescribeConfigurationSettingsExceptionsUnion";

export class DescribeConfigurationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationSettingsInput,
      OutputTypesUnion,
      DescribeConfigurationSettingsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfigurationSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationSettingsInput,
    DescribeConfigurationSettingsOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationSettingsInput,
    DescribeConfigurationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationSettingsInput,
        DescribeConfigurationSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
