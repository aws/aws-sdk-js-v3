import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOpenWorkflowExecutions } from "../model/operations/ListOpenWorkflowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOpenWorkflowExecutionsInput } from "../types/ListOpenWorkflowExecutionsInput";
import { ListOpenWorkflowExecutionsOutput } from "../types/ListOpenWorkflowExecutionsOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/ListOpenWorkflowExecutionsInput";
export * from "../types/ListOpenWorkflowExecutionsOutput";
export * from "../types/ListOpenWorkflowExecutionsExceptionsUnion";

export class ListOpenWorkflowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOpenWorkflowExecutionsInput,
      OutputTypesUnion,
      ListOpenWorkflowExecutionsOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOpenWorkflowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOpenWorkflowExecutionsInput,
    ListOpenWorkflowExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOpenWorkflowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOpenWorkflowExecutionsInput,
    ListOpenWorkflowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListOpenWorkflowExecutionsInput,
        ListOpenWorkflowExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
