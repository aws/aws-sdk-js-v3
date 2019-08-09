import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListScripts } from "../model/ListScripts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListScriptsInput } from "../types/ListScriptsInput";
import { ListScriptsOutput } from "../types/ListScriptsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/ListScriptsInput";
export * from "../types/ListScriptsOutput";
export * from "../types/ListScriptsExceptionsUnion";

export class ListScriptsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListScriptsInput,
      OutputTypesUnion,
      ListScriptsOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListScripts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListScriptsInput,
    ListScriptsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListScriptsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<ListScriptsInput, ListScriptsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListScriptsInput, ListScriptsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
