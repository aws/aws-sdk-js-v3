import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchGameSessions } from "../model/SearchGameSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchGameSessionsInput } from "../types/SearchGameSessionsInput";
import { SearchGameSessionsOutput } from "../types/SearchGameSessionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/SearchGameSessionsInput";
export * from "../types/SearchGameSessionsOutput";
export * from "../types/SearchGameSessionsExceptionsUnion";

export class SearchGameSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchGameSessionsInput,
      OutputTypesUnion,
      SearchGameSessionsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = SearchGameSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchGameSessionsInput,
    SearchGameSessionsOutput,
    Blob
  >();

  constructor(readonly input: SearchGameSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchGameSessionsInput,
    SearchGameSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchGameSessionsInput, SearchGameSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
