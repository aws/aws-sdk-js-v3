import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPartnerEvents } from "../model/operations/PutPartnerEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPartnerEventsInput } from "../types/PutPartnerEventsInput";
import { PutPartnerEventsOutput } from "../types/PutPartnerEventsOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/PutPartnerEventsInput";
export * from "../types/PutPartnerEventsOutput";
export * from "../types/PutPartnerEventsExceptionsUnion";

export class PutPartnerEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPartnerEventsInput,
      OutputTypesUnion,
      PutPartnerEventsOutput,
      CloudWatchEventsResolvedConfiguration,
      Blob
    > {
  readonly model = PutPartnerEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPartnerEventsInput,
    PutPartnerEventsOutput,
    Blob
  >();

  constructor(readonly input: PutPartnerEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutPartnerEventsInput, PutPartnerEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPartnerEventsInput, PutPartnerEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
