import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScalingProcessTypes } from "../model/operations/DescribeScalingProcessTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingProcessTypesInput } from "../types/DescribeScalingProcessTypesInput";
import { DescribeScalingProcessTypesOutput } from "../types/DescribeScalingProcessTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeScalingProcessTypesInput";
export * from "../types/DescribeScalingProcessTypesOutput";
export * from "../types/DescribeScalingProcessTypesExceptionsUnion";

export class DescribeScalingProcessTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingProcessTypesInput,
      OutputTypesUnion,
      DescribeScalingProcessTypesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScalingProcessTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingProcessTypesInput,
    DescribeScalingProcessTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScalingProcessTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingProcessTypesInput,
    DescribeScalingProcessTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeScalingProcessTypesInput,
        DescribeScalingProcessTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
