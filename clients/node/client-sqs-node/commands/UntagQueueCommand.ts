import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UntagQueue } from "../model/UntagQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagQueueInput } from "../types/UntagQueueInput";
import { UntagQueueOutput } from "../types/UntagQueueOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/UntagQueueInput";
export * from "../types/UntagQueueOutput";
export * from "../types/UntagQueueExceptionsUnion";

export class UntagQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagQueueInput,
      OutputTypesUnion,
      UntagQueueOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UntagQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagQueueInput,
    UntagQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: UntagQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagQueueInput, UntagQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagQueueInput, UntagQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
