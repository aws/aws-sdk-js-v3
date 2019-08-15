import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteQueue } from "../model/operations/DeleteQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteQueueInput } from "../types/DeleteQueueInput";
import { DeleteQueueOutput } from "../types/DeleteQueueOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/DeleteQueueInput";
export * from "../types/DeleteQueueOutput";
export * from "../types/DeleteQueueExceptionsUnion";

export class DeleteQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteQueueInput,
      OutputTypesUnion,
      DeleteQueueOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteQueueInput,
    DeleteQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteQueueInput, DeleteQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteQueueInput, DeleteQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
