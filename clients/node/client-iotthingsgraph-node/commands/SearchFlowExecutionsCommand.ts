import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchFlowExecutions } from "../model/SearchFlowExecutions";
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
      _stream.Readable
    > {
  readonly model = SearchFlowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchFlowExecutionsInput,
    SearchFlowExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchFlowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
