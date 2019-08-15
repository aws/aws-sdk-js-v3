import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStateMachine } from "../model/operations/DescribeStateMachine";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStateMachineInput } from "../types/DescribeStateMachineInput";
import { DescribeStateMachineOutput } from "../types/DescribeStateMachineOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DescribeStateMachineInput";
export * from "../types/DescribeStateMachineOutput";
export * from "../types/DescribeStateMachineExceptionsUnion";

export class DescribeStateMachineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStateMachineInput,
      OutputTypesUnion,
      DescribeStateMachineOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStateMachine;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStateMachineInput,
    DescribeStateMachineOutput,
    Blob
  >();

  constructor(readonly input: DescribeStateMachineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStateMachineInput,
    DescribeStateMachineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStateMachineInput, DescribeStateMachineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
