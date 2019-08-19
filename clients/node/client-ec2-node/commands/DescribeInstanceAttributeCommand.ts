import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstanceAttribute } from "../model/operations/DescribeInstanceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceAttributeInput } from "../types/DescribeInstanceAttributeInput";
import { DescribeInstanceAttributeOutput } from "../types/DescribeInstanceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeInstanceAttributeInput";
export * from "../types/DescribeInstanceAttributeOutput";
export * from "../types/DescribeInstanceAttributeExceptionsUnion";

export class DescribeInstanceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceAttributeInput,
      OutputTypesUnion,
      DescribeInstanceAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstanceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceAttributeInput,
    DescribeInstanceAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstanceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceAttributeInput,
    DescribeInstanceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstanceAttributeInput, DescribeInstanceAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
