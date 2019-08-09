import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationAggregatorSourcesStatus } from "../model/DescribeConfigurationAggregatorSourcesStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationAggregatorSourcesStatusInput } from "../types/DescribeConfigurationAggregatorSourcesStatusInput";
import { DescribeConfigurationAggregatorSourcesStatusOutput } from "../types/DescribeConfigurationAggregatorSourcesStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigurationAggregatorSourcesStatusInput";
export * from "../types/DescribeConfigurationAggregatorSourcesStatusOutput";
export * from "../types/DescribeConfigurationAggregatorSourcesStatusExceptionsUnion";

export class DescribeConfigurationAggregatorSourcesStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationAggregatorSourcesStatusInput,
      OutputTypesUnion,
      DescribeConfigurationAggregatorSourcesStatusOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeConfigurationAggregatorSourcesStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationAggregatorSourcesStatusInput,
    DescribeConfigurationAggregatorSourcesStatusOutput,
    Uint8Array
  >();

  constructor(
    readonly input: DescribeConfigurationAggregatorSourcesStatusInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationAggregatorSourcesStatusInput,
    DescribeConfigurationAggregatorSourcesStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationAggregatorSourcesStatusInput,
        DescribeConfigurationAggregatorSourcesStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
