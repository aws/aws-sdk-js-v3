import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGameSession } from "../model/UpdateGameSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGameSessionInput } from "../types/UpdateGameSessionInput";
import { UpdateGameSessionOutput } from "../types/UpdateGameSessionOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateGameSessionInput";
export * from "../types/UpdateGameSessionOutput";
export * from "../types/UpdateGameSessionExceptionsUnion";

export class UpdateGameSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGameSessionInput,
      OutputTypesUnion,
      UpdateGameSessionOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGameSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGameSessionInput,
    UpdateGameSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGameSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGameSessionInput, UpdateGameSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGameSessionInput, UpdateGameSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
