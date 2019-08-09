import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScalingParameters } from "../model/DescribeScalingParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingParametersInput } from "../types/DescribeScalingParametersInput";
import { DescribeScalingParametersOutput } from "../types/DescribeScalingParametersOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeScalingParametersInput";
export * from "../types/DescribeScalingParametersOutput";
export * from "../types/DescribeScalingParametersExceptionsUnion";

export class DescribeScalingParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingParametersInput,
      OutputTypesUnion,
      DescribeScalingParametersOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScalingParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingParametersInput,
    DescribeScalingParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeScalingParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingParametersInput,
    DescribeScalingParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalingParametersInput, DescribeScalingParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
