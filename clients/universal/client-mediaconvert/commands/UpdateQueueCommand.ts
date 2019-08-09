import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateQueue } from "../model/UpdateQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateQueueInput } from "../types/UpdateQueueInput";
import { UpdateQueueOutput } from "../types/UpdateQueueOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/UpdateQueueInput";
export * from "../types/UpdateQueueOutput";
export * from "../types/UpdateQueueExceptionsUnion";

export class UpdateQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateQueueInput,
      OutputTypesUnion,
      UpdateQueueOutput,
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateQueueInput,
    UpdateQueueOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateQueueInput, UpdateQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateQueueInput, UpdateQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
