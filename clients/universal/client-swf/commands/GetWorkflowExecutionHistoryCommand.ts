import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetWorkflowExecutionHistory } from "../model/GetWorkflowExecutionHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkflowExecutionHistoryInput } from "../types/GetWorkflowExecutionHistoryInput";
import { GetWorkflowExecutionHistoryOutput } from "../types/GetWorkflowExecutionHistoryOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/GetWorkflowExecutionHistoryInput";
export * from "../types/GetWorkflowExecutionHistoryOutput";
export * from "../types/GetWorkflowExecutionHistoryExceptionsUnion";

export class GetWorkflowExecutionHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkflowExecutionHistoryInput,
      OutputTypesUnion,
      GetWorkflowExecutionHistoryOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetWorkflowExecutionHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkflowExecutionHistoryInput,
    GetWorkflowExecutionHistoryOutput,
    Uint8Array
  >();

  constructor(readonly input: GetWorkflowExecutionHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetWorkflowExecutionHistoryInput,
    GetWorkflowExecutionHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetWorkflowExecutionHistoryInput,
        GetWorkflowExecutionHistoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
