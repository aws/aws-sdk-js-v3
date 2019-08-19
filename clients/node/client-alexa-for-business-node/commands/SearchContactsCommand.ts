import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchContacts } from "../model/operations/SearchContacts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchContactsInput } from "../types/SearchContactsInput";
import { SearchContactsOutput } from "../types/SearchContactsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchContactsInput";
export * from "../types/SearchContactsOutput";
export * from "../types/SearchContactsExceptionsUnion";

export class SearchContactsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchContactsInput,
      OutputTypesUnion,
      SearchContactsOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchContacts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchContactsInput,
    SearchContactsOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchContactsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchContactsInput, SearchContactsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchContactsInput, SearchContactsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
