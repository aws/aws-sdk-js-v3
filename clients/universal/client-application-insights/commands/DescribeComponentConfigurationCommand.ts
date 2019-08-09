import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeComponentConfiguration } from "../model/DescribeComponentConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComponentConfigurationInput } from "../types/DescribeComponentConfigurationInput";
import { DescribeComponentConfigurationOutput } from "../types/DescribeComponentConfigurationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeComponentConfigurationInput";
export * from "../types/DescribeComponentConfigurationOutput";
export * from "../types/DescribeComponentConfigurationExceptionsUnion";

export class DescribeComponentConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComponentConfigurationInput,
      OutputTypesUnion,
      DescribeComponentConfigurationOutput,
      ApplicationInsightsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeComponentConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComponentConfigurationInput,
    DescribeComponentConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeComponentConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeComponentConfigurationInput,
    DescribeComponentConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeComponentConfigurationInput,
        DescribeComponentConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
