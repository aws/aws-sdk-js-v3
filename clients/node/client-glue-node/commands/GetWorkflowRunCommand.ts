import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetWorkflowRun } from "../model/GetWorkflowRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkflowRunInput } from "../types/GetWorkflowRunInput";
import { GetWorkflowRunOutput } from "../types/GetWorkflowRunOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetWorkflowRunInput";
export * from "../types/GetWorkflowRunOutput";
export * from "../types/GetWorkflowRunExceptionsUnion";

export class GetWorkflowRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkflowRunInput,
      OutputTypesUnion,
      GetWorkflowRunOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetWorkflowRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkflowRunInput,
    GetWorkflowRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetWorkflowRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWorkflowRunInput, GetWorkflowRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWorkflowRunInput, GetWorkflowRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
