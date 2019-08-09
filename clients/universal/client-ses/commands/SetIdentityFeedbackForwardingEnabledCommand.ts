import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetIdentityFeedbackForwardingEnabled } from "../model/SetIdentityFeedbackForwardingEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityFeedbackForwardingEnabledInput } from "../types/SetIdentityFeedbackForwardingEnabledInput";
import { SetIdentityFeedbackForwardingEnabledOutput } from "../types/SetIdentityFeedbackForwardingEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetIdentityFeedbackForwardingEnabledInput";
export * from "../types/SetIdentityFeedbackForwardingEnabledOutput";
export * from "../types/SetIdentityFeedbackForwardingEnabledExceptionsUnion";

export class SetIdentityFeedbackForwardingEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityFeedbackForwardingEnabledInput,
      OutputTypesUnion,
      SetIdentityFeedbackForwardingEnabledOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetIdentityFeedbackForwardingEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityFeedbackForwardingEnabledInput,
    SetIdentityFeedbackForwardingEnabledOutput,
    Uint8Array
  >();

  constructor(readonly input: SetIdentityFeedbackForwardingEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityFeedbackForwardingEnabledInput,
    SetIdentityFeedbackForwardingEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetIdentityFeedbackForwardingEnabledInput,
        SetIdentityFeedbackForwardingEnabledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
