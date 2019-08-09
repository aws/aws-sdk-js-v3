import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCompilationJob } from "../model/DescribeCompilationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCompilationJobInput } from "../types/DescribeCompilationJobInput";
import { DescribeCompilationJobOutput } from "../types/DescribeCompilationJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeCompilationJobInput";
export * from "../types/DescribeCompilationJobOutput";
export * from "../types/DescribeCompilationJobExceptionsUnion";

export class DescribeCompilationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCompilationJobInput,
      OutputTypesUnion,
      DescribeCompilationJobOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCompilationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCompilationJobInput,
    DescribeCompilationJobOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCompilationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCompilationJobInput,
    DescribeCompilationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCompilationJobInput, DescribeCompilationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
