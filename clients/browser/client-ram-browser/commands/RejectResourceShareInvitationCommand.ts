import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectResourceShareInvitation } from "../model/operations/RejectResourceShareInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectResourceShareInvitationInput } from "../types/RejectResourceShareInvitationInput";
import { RejectResourceShareInvitationOutput } from "../types/RejectResourceShareInvitationOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/RejectResourceShareInvitationInput";
export * from "../types/RejectResourceShareInvitationOutput";
export * from "../types/RejectResourceShareInvitationExceptionsUnion";

export class RejectResourceShareInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectResourceShareInvitationInput,
      OutputTypesUnion,
      RejectResourceShareInvitationOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = RejectResourceShareInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectResourceShareInvitationInput,
    RejectResourceShareInvitationOutput,
    Blob
  >();

  constructor(readonly input: RejectResourceShareInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectResourceShareInvitationInput,
    RejectResourceShareInvitationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RejectResourceShareInvitationInput,
        RejectResourceShareInvitationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
