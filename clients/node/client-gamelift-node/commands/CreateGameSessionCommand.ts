import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGameSession } from "../model/CreateGameSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGameSessionInput } from "../types/CreateGameSessionInput";
import { CreateGameSessionOutput } from "../types/CreateGameSessionOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateGameSessionInput";
export * from "../types/CreateGameSessionOutput";
export * from "../types/CreateGameSessionExceptionsUnion";

export class CreateGameSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGameSessionInput,
      OutputTypesUnion,
      CreateGameSessionOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGameSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGameSessionInput,
    CreateGameSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGameSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateGameSessionInput, CreateGameSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGameSessionInput, CreateGameSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
