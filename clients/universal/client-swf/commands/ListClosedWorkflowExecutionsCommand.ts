import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListClosedWorkflowExecutions } from "../model/ListClosedWorkflowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListClosedWorkflowExecutionsInput } from "../types/ListClosedWorkflowExecutionsInput";
import { ListClosedWorkflowExecutionsOutput } from "../types/ListClosedWorkflowExecutionsOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/ListClosedWorkflowExecutionsInput";
export * from "../types/ListClosedWorkflowExecutionsOutput";
export * from "../types/ListClosedWorkflowExecutionsExceptionsUnion";

export class ListClosedWorkflowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListClosedWorkflowExecutionsInput,
      OutputTypesUnion,
      ListClosedWorkflowExecutionsOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListClosedWorkflowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListClosedWorkflowExecutionsInput,
    ListClosedWorkflowExecutionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListClosedWorkflowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListClosedWorkflowExecutionsInput,
    ListClosedWorkflowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListClosedWorkflowExecutionsInput,
        ListClosedWorkflowExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
