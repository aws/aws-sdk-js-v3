import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTransformJob } from "../model/DescribeTransformJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTransformJobInput } from "../types/DescribeTransformJobInput";
import { DescribeTransformJobOutput } from "../types/DescribeTransformJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeTransformJobInput";
export * from "../types/DescribeTransformJobOutput";
export * from "../types/DescribeTransformJobExceptionsUnion";

export class DescribeTransformJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTransformJobInput,
      OutputTypesUnion,
      DescribeTransformJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTransformJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTransformJobInput,
    DescribeTransformJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTransformJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTransformJobInput,
    DescribeTransformJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTransformJobInput, DescribeTransformJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
