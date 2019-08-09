import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVolumeStatus } from "../model/DescribeVolumeStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVolumeStatusInput } from "../types/DescribeVolumeStatusInput";
import { DescribeVolumeStatusOutput } from "../types/DescribeVolumeStatusOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVolumeStatusInput";
export * from "../types/DescribeVolumeStatusOutput";
export * from "../types/DescribeVolumeStatusExceptionsUnion";

export class DescribeVolumeStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVolumeStatusInput,
      OutputTypesUnion,
      DescribeVolumeStatusOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVolumeStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVolumeStatusInput,
    DescribeVolumeStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVolumeStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVolumeStatusInput,
    DescribeVolumeStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVolumeStatusInput, DescribeVolumeStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
