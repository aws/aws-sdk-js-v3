import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchFlowTemplates } from "../model/SearchFlowTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchFlowTemplatesInput } from "../types/SearchFlowTemplatesInput";
import { SearchFlowTemplatesOutput } from "../types/SearchFlowTemplatesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchFlowTemplatesInput";
export * from "../types/SearchFlowTemplatesOutput";
export * from "../types/SearchFlowTemplatesExceptionsUnion";

export class SearchFlowTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchFlowTemplatesInput,
      OutputTypesUnion,
      SearchFlowTemplatesOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchFlowTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchFlowTemplatesInput,
    SearchFlowTemplatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchFlowTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchFlowTemplatesInput,
    SearchFlowTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchFlowTemplatesInput, SearchFlowTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
