import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLoadBasedAutoScaling } from "../model/operations/DescribeLoadBasedAutoScaling";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBasedAutoScalingInput } from "../types/DescribeLoadBasedAutoScalingInput";
import { DescribeLoadBasedAutoScalingOutput } from "../types/DescribeLoadBasedAutoScalingOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeLoadBasedAutoScalingInput";
export * from "../types/DescribeLoadBasedAutoScalingOutput";
export * from "../types/DescribeLoadBasedAutoScalingExceptionsUnion";

export class DescribeLoadBasedAutoScalingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBasedAutoScalingInput,
      OutputTypesUnion,
      DescribeLoadBasedAutoScalingOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLoadBasedAutoScaling;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBasedAutoScalingInput,
    DescribeLoadBasedAutoScalingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLoadBasedAutoScalingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBasedAutoScalingInput,
    DescribeLoadBasedAutoScalingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLoadBasedAutoScalingInput,
        DescribeLoadBasedAutoScalingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
