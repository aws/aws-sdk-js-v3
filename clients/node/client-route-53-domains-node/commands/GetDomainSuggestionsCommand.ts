import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDomainSuggestions } from "../model/operations/GetDomainSuggestions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainSuggestionsInput } from "../types/GetDomainSuggestionsInput";
import { GetDomainSuggestionsOutput } from "../types/GetDomainSuggestionsOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/GetDomainSuggestionsInput";
export * from "../types/GetDomainSuggestionsOutput";
export * from "../types/GetDomainSuggestionsExceptionsUnion";

export class GetDomainSuggestionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainSuggestionsInput,
      OutputTypesUnion,
      GetDomainSuggestionsOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDomainSuggestions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainSuggestionsInput,
    GetDomainSuggestionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDomainSuggestionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDomainSuggestionsInput,
    GetDomainSuggestionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainSuggestionsInput, GetDomainSuggestionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
