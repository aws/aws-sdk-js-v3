import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurgeQueue } from "../model/PurgeQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurgeQueueInput } from "../types/PurgeQueueInput";
import { PurgeQueueOutput } from "../types/PurgeQueueOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/PurgeQueueInput";
export * from "../types/PurgeQueueOutput";
export * from "../types/PurgeQueueExceptionsUnion";

export class PurgeQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurgeQueueInput,
      OutputTypesUnion,
      PurgeQueueOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurgeQueueInput,
    PurgeQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurgeQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<PurgeQueueInput, PurgeQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: PurgeQueue
    };

    return stack.resolve(
      handler<PurgeQueueInput, PurgeQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
