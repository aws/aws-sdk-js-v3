import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchSystemTemplates } from "../model/SearchSystemTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchSystemTemplatesInput } from "../types/SearchSystemTemplatesInput";
import { SearchSystemTemplatesOutput } from "../types/SearchSystemTemplatesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchSystemTemplatesInput";
export * from "../types/SearchSystemTemplatesOutput";
export * from "../types/SearchSystemTemplatesExceptionsUnion";

export class SearchSystemTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchSystemTemplatesInput,
      OutputTypesUnion,
      SearchSystemTemplatesOutput,
      IoTThingsGraphResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SearchSystemTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchSystemTemplatesInput,
    SearchSystemTemplatesOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchSystemTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchSystemTemplatesInput,
    SearchSystemTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchSystemTemplatesInput, SearchSystemTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
