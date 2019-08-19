import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendInvitation } from "../model/operations/SendInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendInvitationInput } from "../types/SendInvitationInput";
import { SendInvitationOutput } from "../types/SendInvitationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SendInvitationInput";
export * from "../types/SendInvitationOutput";
export * from "../types/SendInvitationExceptionsUnion";

export class SendInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendInvitationInput,
      OutputTypesUnion,
      SendInvitationOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = SendInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendInvitationInput,
    SendInvitationOutput,
    Blob
  >();

  constructor(readonly input: SendInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SendInvitationInput, SendInvitationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendInvitationInput, SendInvitationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
