import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationAggregators } from "../model/DescribeConfigurationAggregators";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationAggregatorsInput } from "../types/DescribeConfigurationAggregatorsInput";
import { DescribeConfigurationAggregatorsOutput } from "../types/DescribeConfigurationAggregatorsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigurationAggregatorsInput";
export * from "../types/DescribeConfigurationAggregatorsOutput";
export * from "../types/DescribeConfigurationAggregatorsExceptionsUnion";

export class DescribeConfigurationAggregatorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationAggregatorsInput,
      OutputTypesUnion,
      DescribeConfigurationAggregatorsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfigurationAggregators;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationAggregatorsInput,
    DescribeConfigurationAggregatorsOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationAggregatorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationAggregatorsInput,
    DescribeConfigurationAggregatorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationAggregatorsInput,
        DescribeConfigurationAggregatorsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
