import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetIdentityNotificationTopic } from "../model/operations/SetIdentityNotificationTopic";
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
      _stream.Readable
    > {
  readonly model = SetIdentityNotificationTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityNotificationTopicInput,
    SetIdentityNotificationTopicOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetIdentityNotificationTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
