import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteGameSessionQueue } from "../model/operations/DeleteGameSessionQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGameSessionQueueInput } from "../types/DeleteGameSessionQueueInput";
import { DeleteGameSessionQueueOutput } from "../types/DeleteGameSessionQueueOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteGameSessionQueueInput";
export * from "../types/DeleteGameSessionQueueOutput";
export * from "../types/DeleteGameSessionQueueExceptionsUnion";

export class DeleteGameSessionQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGameSessionQueueInput,
      OutputTypesUnion,
      DeleteGameSessionQueueOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteGameSessionQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGameSessionQueueInput,
    DeleteGameSessionQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteGameSessionQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGameSessionQueueInput,
    DeleteGameSessionQueueOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGameSessionQueueInput, DeleteGameSessionQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
