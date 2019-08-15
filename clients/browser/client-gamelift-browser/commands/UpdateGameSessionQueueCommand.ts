import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGameSessionQueue } from "../model/operations/UpdateGameSessionQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGameSessionQueueInput } from "../types/UpdateGameSessionQueueInput";
import { UpdateGameSessionQueueOutput } from "../types/UpdateGameSessionQueueOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateGameSessionQueueInput";
export * from "../types/UpdateGameSessionQueueOutput";
export * from "../types/UpdateGameSessionQueueExceptionsUnion";

export class UpdateGameSessionQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGameSessionQueueInput,
      OutputTypesUnion,
      UpdateGameSessionQueueOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGameSessionQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGameSessionQueueInput,
    UpdateGameSessionQueueOutput,
    Blob
  >();

  constructor(readonly input: UpdateGameSessionQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGameSessionQueueInput,
    UpdateGameSessionQueueOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGameSessionQueueInput, UpdateGameSessionQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
