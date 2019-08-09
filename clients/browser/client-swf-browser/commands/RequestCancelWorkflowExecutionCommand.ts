import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RequestCancelWorkflowExecution } from "../model/RequestCancelWorkflowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestCancelWorkflowExecutionInput } from "../types/RequestCancelWorkflowExecutionInput";
import { RequestCancelWorkflowExecutionOutput } from "../types/RequestCancelWorkflowExecutionOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RequestCancelWorkflowExecutionInput";
export * from "../types/RequestCancelWorkflowExecutionOutput";
export * from "../types/RequestCancelWorkflowExecutionExceptionsUnion";

export class RequestCancelWorkflowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestCancelWorkflowExecutionInput,
      OutputTypesUnion,
      RequestCancelWorkflowExecutionOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = RequestCancelWorkflowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestCancelWorkflowExecutionInput,
    RequestCancelWorkflowExecutionOutput,
    Blob
  >();

  constructor(readonly input: RequestCancelWorkflowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestCancelWorkflowExecutionInput,
    RequestCancelWorkflowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RequestCancelWorkflowExecutionInput,
        RequestCancelWorkflowExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
