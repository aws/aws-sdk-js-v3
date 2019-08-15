import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeByoipCidrs } from "../model/operations/DescribeByoipCidrs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeByoipCidrsInput } from "../types/DescribeByoipCidrsInput";
import { DescribeByoipCidrsOutput } from "../types/DescribeByoipCidrsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeByoipCidrsInput";
export * from "../types/DescribeByoipCidrsOutput";
export * from "../types/DescribeByoipCidrsExceptionsUnion";

export class DescribeByoipCidrsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeByoipCidrsInput,
      OutputTypesUnion,
      DescribeByoipCidrsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeByoipCidrs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeByoipCidrsInput,
    DescribeByoipCidrsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeByoipCidrsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeByoipCidrsInput,
    DescribeByoipCidrsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeByoipCidrsInput, DescribeByoipCidrsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
