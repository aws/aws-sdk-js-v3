import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHostnameSuggestion } from "../model/operations/GetHostnameSuggestion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostnameSuggestionInput } from "../types/GetHostnameSuggestionInput";
import { GetHostnameSuggestionOutput } from "../types/GetHostnameSuggestionOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/GetHostnameSuggestionInput";
export * from "../types/GetHostnameSuggestionOutput";
export * from "../types/GetHostnameSuggestionExceptionsUnion";

export class GetHostnameSuggestionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostnameSuggestionInput,
      OutputTypesUnion,
      GetHostnameSuggestionOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = GetHostnameSuggestion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostnameSuggestionInput,
    GetHostnameSuggestionOutput,
    Blob
  >();

  constructor(readonly input: GetHostnameSuggestionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHostnameSuggestionInput,
    GetHostnameSuggestionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHostnameSuggestionInput, GetHostnameSuggestionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
