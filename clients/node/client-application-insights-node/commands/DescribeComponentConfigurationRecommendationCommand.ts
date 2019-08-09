import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeComponentConfigurationRecommendation } from "../model/DescribeComponentConfigurationRecommendation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComponentConfigurationRecommendationInput } from "../types/DescribeComponentConfigurationRecommendationInput";
import { DescribeComponentConfigurationRecommendationOutput } from "../types/DescribeComponentConfigurationRecommendationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeComponentConfigurationRecommendationInput";
export * from "../types/DescribeComponentConfigurationRecommendationOutput";
export * from "../types/DescribeComponentConfigurationRecommendationExceptionsUnion";

export class DescribeComponentConfigurationRecommendationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComponentConfigurationRecommendationInput,
      OutputTypesUnion,
      DescribeComponentConfigurationRecommendationOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeComponentConfigurationRecommendation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComponentConfigurationRecommendationInput,
    DescribeComponentConfigurationRecommendationOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: DescribeComponentConfigurationRecommendationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeComponentConfigurationRecommendationInput,
    DescribeComponentConfigurationRecommendationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeComponentConfigurationRecommendationInput,
        DescribeComponentConfigurationRecommendationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
