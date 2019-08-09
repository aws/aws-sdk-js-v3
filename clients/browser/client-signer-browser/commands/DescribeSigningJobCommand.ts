import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSigningJob } from "../model/DescribeSigningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSigningJobInput } from "../types/DescribeSigningJobInput";
import { DescribeSigningJobOutput } from "../types/DescribeSigningJobOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/DescribeSigningJobInput";
export * from "../types/DescribeSigningJobOutput";
export * from "../types/DescribeSigningJobExceptionsUnion";

export class DescribeSigningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSigningJobInput,
      OutputTypesUnion,
      DescribeSigningJobOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSigningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSigningJobInput,
    DescribeSigningJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeSigningJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSigningJobInput,
    DescribeSigningJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSigningJobInput, DescribeSigningJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
