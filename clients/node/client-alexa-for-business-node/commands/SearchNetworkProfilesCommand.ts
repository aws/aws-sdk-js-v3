import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchNetworkProfiles } from "../model/operations/SearchNetworkProfiles";
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
      _stream.Readable
    > {
  readonly model = SearchNetworkProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchNetworkProfilesInput,
    SearchNetworkProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchNetworkProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
