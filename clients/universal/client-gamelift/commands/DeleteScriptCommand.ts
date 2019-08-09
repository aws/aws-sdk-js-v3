import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScript } from "../model/DeleteScript";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScriptInput } from "../types/DeleteScriptInput";
import { DeleteScriptOutput } from "../types/DeleteScriptOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteScriptInput";
export * from "../types/DeleteScriptOutput";
export * from "../types/DeleteScriptExceptionsUnion";

export class DeleteScriptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScriptInput,
      OutputTypesUnion,
      DeleteScriptOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScriptInput,
    DeleteScriptOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteScriptInput, DeleteScriptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScriptInput, DeleteScriptOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
