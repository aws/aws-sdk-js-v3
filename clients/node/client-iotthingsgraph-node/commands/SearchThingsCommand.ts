import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchThings } from "../model/SearchThings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchThingsInput } from "../types/SearchThingsInput";
import { SearchThingsOutput } from "../types/SearchThingsOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchThingsInput";
export * from "../types/SearchThingsOutput";
export * from "../types/SearchThingsExceptionsUnion";

export class SearchThingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchThingsInput,
      OutputTypesUnion,
      SearchThingsOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchThings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchThingsInput,
    SearchThingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchThingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchThingsInput, SearchThingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchThingsInput, SearchThingsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
