import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptInvitation } from "../model/AcceptInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptInvitationInput } from "../types/AcceptInvitationInput";
import { AcceptInvitationOutput } from "../types/AcceptInvitationOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
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
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptInvitationInput,
    AcceptInvitationOutput,
    Uint8Array
  >();

  constructor(readonly input: AcceptInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
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
