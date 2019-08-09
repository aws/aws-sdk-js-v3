import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchProfiles } from "../model/SearchProfiles";
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
      Uint8Array
    > {
  readonly model = SearchProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchProfilesInput,
    SearchProfilesOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
