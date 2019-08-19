import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateJobQueue } from "../model/operations/CreateJobQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateJobQueueInput } from "../types/CreateJobQueueInput";
import { CreateJobQueueOutput } from "../types/CreateJobQueueOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/CreateJobQueueInput";
export * from "../types/CreateJobQueueOutput";
export * from "../types/CreateJobQueueExceptionsUnion";

export class CreateJobQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateJobQueueInput,
      OutputTypesUnion,
      CreateJobQueueOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateJobQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateJobQueueInput,
    CreateJobQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateJobQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateJobQueueInput, CreateJobQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateJobQueueInput, CreateJobQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
