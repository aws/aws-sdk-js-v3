import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConferenceProviders } from "../model/operations/ListConferenceProviders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConferenceProvidersInput } from "../types/ListConferenceProvidersInput";
import { ListConferenceProvidersOutput } from "../types/ListConferenceProvidersOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListConferenceProvidersInput";
export * from "../types/ListConferenceProvidersOutput";
export * from "../types/ListConferenceProvidersExceptionsUnion";

export class ListConferenceProvidersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConferenceProvidersInput,
      OutputTypesUnion,
      ListConferenceProvidersOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConferenceProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConferenceProvidersInput,
    ListConferenceProvidersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConferenceProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConferenceProvidersInput,
    ListConferenceProvidersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListConferenceProvidersInput, ListConferenceProvidersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
