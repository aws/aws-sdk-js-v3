import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleetHistory } from "../model/DescribeFleetHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetHistoryInput } from "../types/DescribeFleetHistoryInput";
import { DescribeFleetHistoryOutput } from "../types/DescribeFleetHistoryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeFleetHistoryInput";
export * from "../types/DescribeFleetHistoryOutput";
export * from "../types/DescribeFleetHistoryExceptionsUnion";

export class DescribeFleetHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetHistoryInput,
      OutputTypesUnion,
      DescribeFleetHistoryOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleetHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetHistoryInput,
    DescribeFleetHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetHistoryInput,
    DescribeFleetHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetHistoryInput, DescribeFleetHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
