import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBots } from "../model/ListBots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBotsInput } from "../types/ListBotsInput";
import { ListBotsOutput } from "../types/ListBotsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ListBotsInput";
export * from "../types/ListBotsOutput";
export * from "../types/ListBotsExceptionsUnion";

export class ListBotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBotsInput,
      OutputTypesUnion,
      ListBotsOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListBots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBotsInput,
    ListBotsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListBotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBotsInput, ListBotsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBotsInput, ListBotsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
