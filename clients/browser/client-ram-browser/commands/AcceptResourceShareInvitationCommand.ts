import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptResourceShareInvitation } from "../model/AcceptResourceShareInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptResourceShareInvitationInput } from "../types/AcceptResourceShareInvitationInput";
import { AcceptResourceShareInvitationOutput } from "../types/AcceptResourceShareInvitationOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/AcceptResourceShareInvitationInput";
export * from "../types/AcceptResourceShareInvitationOutput";
export * from "../types/AcceptResourceShareInvitationExceptionsUnion";

export class AcceptResourceShareInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptResourceShareInvitationInput,
      OutputTypesUnion,
      AcceptResourceShareInvitationOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = AcceptResourceShareInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptResourceShareInvitationInput,
    AcceptResourceShareInvitationOutput,
    Blob
  >();

  constructor(readonly input: AcceptResourceShareInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptResourceShareInvitationInput,
    AcceptResourceShareInvitationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptResourceShareInvitationInput,
        AcceptResourceShareInvitationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
