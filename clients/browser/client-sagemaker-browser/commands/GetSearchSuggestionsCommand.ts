import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSearchSuggestions } from "../model/operations/GetSearchSuggestions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSearchSuggestionsInput } from "../types/GetSearchSuggestionsInput";
import { GetSearchSuggestionsOutput } from "../types/GetSearchSuggestionsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/GetSearchSuggestionsInput";
export * from "../types/GetSearchSuggestionsOutput";
export * from "../types/GetSearchSuggestionsExceptionsUnion";

export class GetSearchSuggestionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSearchSuggestionsInput,
      OutputTypesUnion,
      GetSearchSuggestionsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = GetSearchSuggestions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSearchSuggestionsInput,
    GetSearchSuggestionsOutput,
    Blob
  >();

  constructor(readonly input: GetSearchSuggestionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSearchSuggestionsInput,
    GetSearchSuggestionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSearchSuggestionsInput, GetSearchSuggestionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
