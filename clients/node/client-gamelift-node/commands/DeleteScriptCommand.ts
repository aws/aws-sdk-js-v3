import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteScript } from "../model/operations/DeleteScript";
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
      _stream.Readable
    > {
  readonly model = DeleteScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScriptInput,
    DeleteScriptOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
