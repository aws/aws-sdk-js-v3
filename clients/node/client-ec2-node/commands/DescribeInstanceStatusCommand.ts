import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstanceStatus } from "../model/operations/DescribeInstanceStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceStatusInput } from "../types/DescribeInstanceStatusInput";
import { DescribeInstanceStatusOutput } from "../types/DescribeInstanceStatusOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeInstanceStatusInput";
export * from "../types/DescribeInstanceStatusOutput";
export * from "../types/DescribeInstanceStatusExceptionsUnion";

export class DescribeInstanceStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceStatusInput,
      OutputTypesUnion,
      DescribeInstanceStatusOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstanceStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceStatusInput,
    DescribeInstanceStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstanceStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceStatusInput,
    DescribeInstanceStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstanceStatusInput, DescribeInstanceStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
