import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartWorkflowExecution } from "../model/StartWorkflowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartWorkflowExecutionInput } from "../types/StartWorkflowExecutionInput";
import { StartWorkflowExecutionOutput } from "../types/StartWorkflowExecutionOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/StartWorkflowExecutionInput";
export * from "../types/StartWorkflowExecutionOutput";
export * from "../types/StartWorkflowExecutionExceptionsUnion";

export class StartWorkflowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartWorkflowExecutionInput,
      OutputTypesUnion,
      StartWorkflowExecutionOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartWorkflowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartWorkflowExecutionInput,
    StartWorkflowExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartWorkflowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartWorkflowExecutionInput,
    StartWorkflowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartWorkflowExecutionInput, StartWorkflowExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
