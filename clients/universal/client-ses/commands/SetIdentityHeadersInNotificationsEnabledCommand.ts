import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetIdentityHeadersInNotificationsEnabled } from "../model/SetIdentityHeadersInNotificationsEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityHeadersInNotificationsEnabledInput } from "../types/SetIdentityHeadersInNotificationsEnabledInput";
import { SetIdentityHeadersInNotificationsEnabledOutput } from "../types/SetIdentityHeadersInNotificationsEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetIdentityHeadersInNotificationsEnabledInput";
export * from "../types/SetIdentityHeadersInNotificationsEnabledOutput";
export * from "../types/SetIdentityHeadersInNotificationsEnabledExceptionsUnion";

export class SetIdentityHeadersInNotificationsEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityHeadersInNotificationsEnabledInput,
      OutputTypesUnion,
      SetIdentityHeadersInNotificationsEnabledOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetIdentityHeadersInNotificationsEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityHeadersInNotificationsEnabledInput,
    SetIdentityHeadersInNotificationsEnabledOutput,
    Uint8Array
  >();

  constructor(readonly input: SetIdentityHeadersInNotificationsEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityHeadersInNotificationsEnabledInput,
    SetIdentityHeadersInNotificationsEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetIdentityHeadersInNotificationsEnabledInput,
        SetIdentityHeadersInNotificationsEnabledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
