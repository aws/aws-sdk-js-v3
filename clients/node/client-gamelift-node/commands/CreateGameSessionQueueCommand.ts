import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGameSessionQueue } from "../model/operations/CreateGameSessionQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGameSessionQueueInput } from "../types/CreateGameSessionQueueInput";
import { CreateGameSessionQueueOutput } from "../types/CreateGameSessionQueueOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateGameSessionQueueInput";
export * from "../types/CreateGameSessionQueueOutput";
export * from "../types/CreateGameSessionQueueExceptionsUnion";

export class CreateGameSessionQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGameSessionQueueInput,
      OutputTypesUnion,
      CreateGameSessionQueueOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGameSessionQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGameSessionQueueInput,
    CreateGameSessionQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGameSessionQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGameSessionQueueInput,
    CreateGameSessionQueueOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGameSessionQueueInput, CreateGameSessionQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
