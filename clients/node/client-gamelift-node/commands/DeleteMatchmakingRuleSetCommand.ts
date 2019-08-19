import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteMatchmakingRuleSet } from "../model/operations/DeleteMatchmakingRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMatchmakingRuleSetInput } from "../types/DeleteMatchmakingRuleSetInput";
import { DeleteMatchmakingRuleSetOutput } from "../types/DeleteMatchmakingRuleSetOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteMatchmakingRuleSetInput";
export * from "../types/DeleteMatchmakingRuleSetOutput";
export * from "../types/DeleteMatchmakingRuleSetExceptionsUnion";

export class DeleteMatchmakingRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMatchmakingRuleSetInput,
      OutputTypesUnion,
      DeleteMatchmakingRuleSetOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteMatchmakingRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMatchmakingRuleSetInput,
    DeleteMatchmakingRuleSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteMatchmakingRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMatchmakingRuleSetInput,
    DeleteMatchmakingRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMatchmakingRuleSetInput, DeleteMatchmakingRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
