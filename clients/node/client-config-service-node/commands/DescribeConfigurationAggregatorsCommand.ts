import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConfigurationAggregators } from "../model/operations/DescribeConfigurationAggregators";
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
      _stream.Readable
    > {
  readonly model = DescribeConfigurationAggregators;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationAggregatorsInput,
    DescribeConfigurationAggregatorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConfigurationAggregatorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
