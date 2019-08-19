import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SignalWorkflowExecution } from "../model/operations/SignalWorkflowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SignalWorkflowExecutionInput } from "../types/SignalWorkflowExecutionInput";
import { SignalWorkflowExecutionOutput } from "../types/SignalWorkflowExecutionOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/SignalWorkflowExecutionInput";
export * from "../types/SignalWorkflowExecutionOutput";
export * from "../types/SignalWorkflowExecutionExceptionsUnion";

export class SignalWorkflowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SignalWorkflowExecutionInput,
      OutputTypesUnion,
      SignalWorkflowExecutionOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SignalWorkflowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignalWorkflowExecutionInput,
    SignalWorkflowExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: SignalWorkflowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SignalWorkflowExecutionInput,
    SignalWorkflowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SignalWorkflowExecutionInput, SignalWorkflowExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
