import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMatchmakingRuleSet } from "../model/operations/CreateMatchmakingRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMatchmakingRuleSetInput } from "../types/CreateMatchmakingRuleSetInput";
import { CreateMatchmakingRuleSetOutput } from "../types/CreateMatchmakingRuleSetOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateMatchmakingRuleSetInput";
export * from "../types/CreateMatchmakingRuleSetOutput";
export * from "../types/CreateMatchmakingRuleSetExceptionsUnion";

export class CreateMatchmakingRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMatchmakingRuleSetInput,
      OutputTypesUnion,
      CreateMatchmakingRuleSetOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMatchmakingRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMatchmakingRuleSetInput,
    CreateMatchmakingRuleSetOutput,
    Blob
  >();

  constructor(readonly input: CreateMatchmakingRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMatchmakingRuleSetInput,
    CreateMatchmakingRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
