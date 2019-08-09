import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateScript } from "../model/UpdateScript";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateScriptInput } from "../types/UpdateScriptInput";
import { UpdateScriptOutput } from "../types/UpdateScriptOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateScriptInput";
export * from "../types/UpdateScriptOutput";
export * from "../types/UpdateScriptExceptionsUnion";

export class UpdateScriptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateScriptInput,
      OutputTypesUnion,
      UpdateScriptOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateScriptInput,
    UpdateScriptOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateScriptInput, UpdateScriptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateScriptInput, UpdateScriptOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
