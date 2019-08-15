import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStateMachineForExecution } from "../model/operations/DescribeStateMachineForExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStateMachineForExecutionInput } from "../types/DescribeStateMachineForExecutionInput";
import { DescribeStateMachineForExecutionOutput } from "../types/DescribeStateMachineForExecutionOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DescribeStateMachineForExecutionInput";
export * from "../types/DescribeStateMachineForExecutionOutput";
export * from "../types/DescribeStateMachineForExecutionExceptionsUnion";

export class DescribeStateMachineForExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStateMachineForExecutionInput,
      OutputTypesUnion,
      DescribeStateMachineForExecutionOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStateMachineForExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStateMachineForExecutionInput,
    DescribeStateMachineForExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStateMachineForExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStateMachineForExecutionInput,
    DescribeStateMachineForExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStateMachineForExecutionInput,
        DescribeStateMachineForExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
