import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAutoScalingInstances } from "../model/operations/DescribeAutoScalingInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAutoScalingInstancesInput } from "../types/DescribeAutoScalingInstancesInput";
import { DescribeAutoScalingInstancesOutput } from "../types/DescribeAutoScalingInstancesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeAutoScalingInstancesInput";
export * from "../types/DescribeAutoScalingInstancesOutput";
export * from "../types/DescribeAutoScalingInstancesExceptionsUnion";

export class DescribeAutoScalingInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAutoScalingInstancesInput,
      OutputTypesUnion,
      DescribeAutoScalingInstancesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAutoScalingInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAutoScalingInstancesInput,
    DescribeAutoScalingInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAutoScalingInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAutoScalingInstancesInput,
    DescribeAutoScalingInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAutoScalingInstancesInput,
        DescribeAutoScalingInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
