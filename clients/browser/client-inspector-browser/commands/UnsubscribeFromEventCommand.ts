import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnsubscribeFromEvent } from "../model/UnsubscribeFromEvent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnsubscribeFromEventInput } from "../types/UnsubscribeFromEventInput";
import { UnsubscribeFromEventOutput } from "../types/UnsubscribeFromEventOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/UnsubscribeFromEventInput";
export * from "../types/UnsubscribeFromEventOutput";
export * from "../types/UnsubscribeFromEventExceptionsUnion";

export class UnsubscribeFromEventCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnsubscribeFromEventInput,
      OutputTypesUnion,
      UnsubscribeFromEventOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = UnsubscribeFromEvent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnsubscribeFromEventInput,
    UnsubscribeFromEventOutput,
    Blob
  >();

  constructor(readonly input: UnsubscribeFromEventInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnsubscribeFromEventInput,
    UnsubscribeFromEventOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnsubscribeFromEventInput, UnsubscribeFromEventOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
