import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEvents } from "../model/operations/PutEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEventsInput } from "../types/PutEventsInput";
import { PutEventsOutput } from "../types/PutEventsOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/PutEventsInput";
export * from "../types/PutEventsOutput";
export * from "../types/PutEventsExceptionsUnion";

export class PutEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEventsInput,
      OutputTypesUnion,
      PutEventsOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventsInput,
    PutEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEventsInput, PutEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEventsInput, PutEventsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
