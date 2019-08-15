import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartWorkflowRun } from "../model/operations/StartWorkflowRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartWorkflowRunInput } from "../types/StartWorkflowRunInput";
import { StartWorkflowRunOutput } from "../types/StartWorkflowRunOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StartWorkflowRunInput";
export * from "../types/StartWorkflowRunOutput";
export * from "../types/StartWorkflowRunExceptionsUnion";

export class StartWorkflowRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartWorkflowRunInput,
      OutputTypesUnion,
      StartWorkflowRunOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartWorkflowRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartWorkflowRunInput,
    StartWorkflowRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartWorkflowRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StartWorkflowRunInput, StartWorkflowRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartWorkflowRunInput, StartWorkflowRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
