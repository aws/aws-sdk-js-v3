import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CountClosedWorkflowExecutions } from "../model/CountClosedWorkflowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CountClosedWorkflowExecutionsInput } from "../types/CountClosedWorkflowExecutionsInput";
import { CountClosedWorkflowExecutionsOutput } from "../types/CountClosedWorkflowExecutionsOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/CountClosedWorkflowExecutionsInput";
export * from "../types/CountClosedWorkflowExecutionsOutput";
export * from "../types/CountClosedWorkflowExecutionsExceptionsUnion";

export class CountClosedWorkflowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CountClosedWorkflowExecutionsInput,
      OutputTypesUnion,
      CountClosedWorkflowExecutionsOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CountClosedWorkflowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CountClosedWorkflowExecutionsInput,
    CountClosedWorkflowExecutionsOutput,
    Uint8Array
  >();

  constructor(readonly input: CountClosedWorkflowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CountClosedWorkflowExecutionsInput,
    CountClosedWorkflowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CountClosedWorkflowExecutionsInput,
        CountClosedWorkflowExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
