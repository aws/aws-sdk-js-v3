import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScalableTargets } from "../model/operations/DescribeScalableTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalableTargetsInput } from "../types/DescribeScalableTargetsInput";
import { DescribeScalableTargetsOutput } from "../types/DescribeScalableTargetsOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DescribeScalableTargetsInput";
export * from "../types/DescribeScalableTargetsOutput";
export * from "../types/DescribeScalableTargetsExceptionsUnion";

export class DescribeScalableTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalableTargetsInput,
      OutputTypesUnion,
      DescribeScalableTargetsOutput,
      ApplicationAutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScalableTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalableTargetsInput,
    DescribeScalableTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScalableTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalableTargetsInput,
    DescribeScalableTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalableTargetsInput, DescribeScalableTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
