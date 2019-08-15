import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchProfiles } from "../model/operations/SearchProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchProfilesInput } from "../types/SearchProfilesInput";
import { SearchProfilesOutput } from "../types/SearchProfilesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchProfilesInput";
export * from "../types/SearchProfilesOutput";
export * from "../types/SearchProfilesExceptionsUnion";

export class SearchProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchProfilesInput,
      OutputTypesUnion,
      SearchProfilesOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchProfilesInput,
    SearchProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchProfilesInput, SearchProfilesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchProfilesInput, SearchProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
