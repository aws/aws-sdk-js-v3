import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHyperParameterTuningJob } from "../model/DescribeHyperParameterTuningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHyperParameterTuningJobInput } from "../types/DescribeHyperParameterTuningJobInput";
import { DescribeHyperParameterTuningJobOutput } from "../types/DescribeHyperParameterTuningJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeHyperParameterTuningJobInput";
export * from "../types/DescribeHyperParameterTuningJobOutput";
export * from "../types/DescribeHyperParameterTuningJobExceptionsUnion";

export class DescribeHyperParameterTuningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHyperParameterTuningJobInput,
      OutputTypesUnion,
      DescribeHyperParameterTuningJobOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeHyperParameterTuningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHyperParameterTuningJobInput,
    DescribeHyperParameterTuningJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeHyperParameterTuningJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeHyperParameterTuningJobInput,
    DescribeHyperParameterTuningJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeHyperParameterTuningJobInput,
        DescribeHyperParameterTuningJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
