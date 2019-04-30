import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TagQueue } from "../model/TagQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagQueueInput } from "../types/TagQueueInput";
import { TagQueueOutput } from "../types/TagQueueOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/TagQueueInput";
export * from "../types/TagQueueOutput";
export * from "../types/TagQueueExceptionsUnion";

export class TagQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagQueueInput,
      OutputTypesUnion,
      TagQueueOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagQueueInput,
    TagQueueOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<TagQueueInput, TagQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: TagQueue
    };

    return stack.resolve(
      handler<TagQueueInput, TagQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
