import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptInvitation } from "../model/AcceptInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptInvitationInput } from "../types/AcceptInvitationInput";
import { AcceptInvitationOutput } from "../types/AcceptInvitationOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/AcceptInvitationInput";
export * from "../types/AcceptInvitationOutput";
export * from "../types/AcceptInvitationExceptionsUnion";

export class AcceptInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptInvitationInput,
      OutputTypesUnion,
      AcceptInvitationOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = AcceptInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptInvitationInput,
    AcceptInvitationOutput,
    Blob
  >();

  constructor(readonly input: AcceptInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<AcceptInvitationInput, AcceptInvitationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptInvitationInput, AcceptInvitationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
