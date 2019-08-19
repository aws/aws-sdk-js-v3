import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateWorkflowExecution } from "../model/operations/TerminateWorkflowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateWorkflowExecutionInput } from "../types/TerminateWorkflowExecutionInput";
import { TerminateWorkflowExecutionOutput } from "../types/TerminateWorkflowExecutionOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/TerminateWorkflowExecutionInput";
export * from "../types/TerminateWorkflowExecutionOutput";
export * from "../types/TerminateWorkflowExecutionExceptionsUnion";

export class TerminateWorkflowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateWorkflowExecutionInput,
      OutputTypesUnion,
      TerminateWorkflowExecutionOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateWorkflowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateWorkflowExecutionInput,
    TerminateWorkflowExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateWorkflowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateWorkflowExecutionInput,
    TerminateWorkflowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        TerminateWorkflowExecutionInput,
        TerminateWorkflowExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
