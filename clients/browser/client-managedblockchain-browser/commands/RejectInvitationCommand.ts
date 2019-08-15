import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectInvitation } from "../model/operations/RejectInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectInvitationInput } from "../types/RejectInvitationInput";
import { RejectInvitationOutput } from "../types/RejectInvitationOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/RejectInvitationInput";
export * from "../types/RejectInvitationOutput";
export * from "../types/RejectInvitationExceptionsUnion";

export class RejectInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectInvitationInput,
      OutputTypesUnion,
      RejectInvitationOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = RejectInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectInvitationInput,
    RejectInvitationOutput,
    Blob
  >();

  constructor(readonly input: RejectInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<RejectInvitationInput, RejectInvitationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectInvitationInput, RejectInvitationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
