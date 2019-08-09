import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { LookupEvents } from "../model/LookupEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LookupEventsInput } from "../types/LookupEventsInput";
import { LookupEventsOutput } from "../types/LookupEventsOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/LookupEventsInput";
export * from "../types/LookupEventsOutput";
export * from "../types/LookupEventsExceptionsUnion";

export class LookupEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LookupEventsInput,
      OutputTypesUnion,
      LookupEventsOutput,
      CloudTrailResolvedConfiguration,
      Blob
    > {
  readonly model = LookupEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LookupEventsInput,
    LookupEventsOutput,
    Blob
  >();

  constructor(readonly input: LookupEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<LookupEventsInput, LookupEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LookupEventsInput, LookupEventsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
