import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetSubscriptionAttributes } from "../model/operations/SetSubscriptionAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSubscriptionAttributesInput } from "../types/SetSubscriptionAttributesInput";
import { SetSubscriptionAttributesOutput } from "../types/SetSubscriptionAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SetSubscriptionAttributesInput";
export * from "../types/SetSubscriptionAttributesOutput";
export * from "../types/SetSubscriptionAttributesExceptionsUnion";

export class SetSubscriptionAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSubscriptionAttributesInput,
      OutputTypesUnion,
      SetSubscriptionAttributesOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = SetSubscriptionAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSubscriptionAttributesInput,
    SetSubscriptionAttributesOutput,
    Blob
  >();

  constructor(readonly input: SetSubscriptionAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetSubscriptionAttributesInput,
    SetSubscriptionAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetSubscriptionAttributesInput, SetSubscriptionAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
