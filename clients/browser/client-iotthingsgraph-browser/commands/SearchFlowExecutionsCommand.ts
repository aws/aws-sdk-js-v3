import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchFlowExecutions } from "../model/operations/SearchFlowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchFlowExecutionsInput } from "../types/SearchFlowExecutionsInput";
import { SearchFlowExecutionsOutput } from "../types/SearchFlowExecutionsOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchFlowExecutionsInput";
export * from "../types/SearchFlowExecutionsOutput";
export * from "../types/SearchFlowExecutionsExceptionsUnion";

export class SearchFlowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchFlowExecutionsInput,
      OutputTypesUnion,
      SearchFlowExecutionsOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = SearchFlowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchFlowExecutionsInput,
    SearchFlowExecutionsOutput,
    Blob
  >();

  constructor(readonly input: SearchFlowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchFlowExecutionsInput,
    SearchFlowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchFlowExecutionsInput, SearchFlowExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
