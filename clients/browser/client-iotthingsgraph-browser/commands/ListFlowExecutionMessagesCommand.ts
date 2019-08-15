import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFlowExecutionMessages } from "../model/operations/ListFlowExecutionMessages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFlowExecutionMessagesInput } from "../types/ListFlowExecutionMessagesInput";
import { ListFlowExecutionMessagesOutput } from "../types/ListFlowExecutionMessagesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/ListFlowExecutionMessagesInput";
export * from "../types/ListFlowExecutionMessagesOutput";
export * from "../types/ListFlowExecutionMessagesExceptionsUnion";

export class ListFlowExecutionMessagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFlowExecutionMessagesInput,
      OutputTypesUnion,
      ListFlowExecutionMessagesOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = ListFlowExecutionMessages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFlowExecutionMessagesInput,
    ListFlowExecutionMessagesOutput,
    Blob
  >();

  constructor(readonly input: ListFlowExecutionMessagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFlowExecutionMessagesInput,
    ListFlowExecutionMessagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFlowExecutionMessagesInput, ListFlowExecutionMessagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
