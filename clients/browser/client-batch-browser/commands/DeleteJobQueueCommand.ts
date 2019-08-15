import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteJobQueue } from "../model/operations/DeleteJobQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteJobQueueInput } from "../types/DeleteJobQueueInput";
import { DeleteJobQueueOutput } from "../types/DeleteJobQueueOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DeleteJobQueueInput";
export * from "../types/DeleteJobQueueOutput";
export * from "../types/DeleteJobQueueExceptionsUnion";

export class DeleteJobQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteJobQueueInput,
      OutputTypesUnion,
      DeleteJobQueueOutput,
      BatchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteJobQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteJobQueueInput,
    DeleteJobQueueOutput,
    Blob
  >();

  constructor(readonly input: DeleteJobQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteJobQueueInput, DeleteJobQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteJobQueueInput, DeleteJobQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
