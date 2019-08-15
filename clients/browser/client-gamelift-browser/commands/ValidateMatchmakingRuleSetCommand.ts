import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ValidateMatchmakingRuleSet } from "../model/operations/ValidateMatchmakingRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ValidateMatchmakingRuleSetInput } from "../types/ValidateMatchmakingRuleSetInput";
import { ValidateMatchmakingRuleSetOutput } from "../types/ValidateMatchmakingRuleSetOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/ValidateMatchmakingRuleSetInput";
export * from "../types/ValidateMatchmakingRuleSetOutput";
export * from "../types/ValidateMatchmakingRuleSetExceptionsUnion";

export class ValidateMatchmakingRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ValidateMatchmakingRuleSetInput,
      OutputTypesUnion,
      ValidateMatchmakingRuleSetOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = ValidateMatchmakingRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ValidateMatchmakingRuleSetInput,
    ValidateMatchmakingRuleSetOutput,
    Blob
  >();

  constructor(readonly input: ValidateMatchmakingRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ValidateMatchmakingRuleSetInput,
    ValidateMatchmakingRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ValidateMatchmakingRuleSetInput,
        ValidateMatchmakingRuleSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
