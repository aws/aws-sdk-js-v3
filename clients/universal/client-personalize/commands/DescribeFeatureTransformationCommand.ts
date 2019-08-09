import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFeatureTransformation } from "../model/DescribeFeatureTransformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFeatureTransformationInput } from "../types/DescribeFeatureTransformationInput";
import { DescribeFeatureTransformationOutput } from "../types/DescribeFeatureTransformationOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeFeatureTransformationInput";
export * from "../types/DescribeFeatureTransformationOutput";
export * from "../types/DescribeFeatureTransformationExceptionsUnion";

export class DescribeFeatureTransformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFeatureTransformationInput,
      OutputTypesUnion,
      DescribeFeatureTransformationOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFeatureTransformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFeatureTransformationInput,
    DescribeFeatureTransformationOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFeatureTransformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFeatureTransformationInput,
    DescribeFeatureTransformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeFeatureTransformationInput,
        DescribeFeatureTransformationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
