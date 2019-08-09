import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPartnerEvents } from "../model/PutPartnerEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPartnerEventsInput } from "../types/PutPartnerEventsInput";
import { PutPartnerEventsOutput } from "../types/PutPartnerEventsOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
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
      EventBridgeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutPartnerEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPartnerEventsInput,
    PutPartnerEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: PutPartnerEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EventBridgeResolvedConfiguration
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
