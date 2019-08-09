import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetIdentityNotificationTopic } from "../model/SetIdentityNotificationTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityNotificationTopicInput } from "../types/SetIdentityNotificationTopicInput";
import { SetIdentityNotificationTopicOutput } from "../types/SetIdentityNotificationTopicOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetIdentityNotificationTopicInput";
export * from "../types/SetIdentityNotificationTopicOutput";
export * from "../types/SetIdentityNotificationTopicExceptionsUnion";

export class SetIdentityNotificationTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityNotificationTopicInput,
      OutputTypesUnion,
      SetIdentityNotificationTopicOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SetIdentityNotificationTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityNotificationTopicInput,
    SetIdentityNotificationTopicOutput,
    Blob
  >();

  constructor(readonly input: SetIdentityNotificationTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityNotificationTopicInput,
    SetIdentityNotificationTopicOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetIdentityNotificationTopicInput,
        SetIdentityNotificationTopicOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
