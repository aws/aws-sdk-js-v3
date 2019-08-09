import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchNetworkProfiles } from "../model/SearchNetworkProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchNetworkProfilesInput } from "../types/SearchNetworkProfilesInput";
import { SearchNetworkProfilesOutput } from "../types/SearchNetworkProfilesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchNetworkProfilesInput";
export * from "../types/SearchNetworkProfilesOutput";
export * from "../types/SearchNetworkProfilesExceptionsUnion";

export class SearchNetworkProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchNetworkProfilesInput,
      OutputTypesUnion,
      SearchNetworkProfilesOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = SearchNetworkProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchNetworkProfilesInput,
    SearchNetworkProfilesOutput,
    Blob
  >();

  constructor(readonly input: SearchNetworkProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchNetworkProfilesInput,
    SearchNetworkProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchNetworkProfilesInput, SearchNetworkProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
