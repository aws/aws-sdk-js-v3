import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CountOpenWorkflowExecutions } from "../model/operations/CountOpenWorkflowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CountOpenWorkflowExecutionsInput } from "../types/CountOpenWorkflowExecutionsInput";
import { CountOpenWorkflowExecutionsOutput } from "../types/CountOpenWorkflowExecutionsOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/CountOpenWorkflowExecutionsInput";
export * from "../types/CountOpenWorkflowExecutionsOutput";
export * from "../types/CountOpenWorkflowExecutionsExceptionsUnion";

export class CountOpenWorkflowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CountOpenWorkflowExecutionsInput,
      OutputTypesUnion,
      CountOpenWorkflowExecutionsOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = CountOpenWorkflowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CountOpenWorkflowExecutionsInput,
    CountOpenWorkflowExecutionsOutput,
    Blob
  >();

  constructor(readonly input: CountOpenWorkflowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CountOpenWorkflowExecutionsInput,
    CountOpenWorkflowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CountOpenWorkflowExecutionsInput,
        CountOpenWorkflowExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
