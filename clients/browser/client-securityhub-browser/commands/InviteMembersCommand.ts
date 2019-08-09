import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InviteMembers } from "../model/InviteMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InviteMembersInput } from "../types/InviteMembersInput";
import { InviteMembersOutput } from "../types/InviteMembersOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/InviteMembersInput";
export * from "../types/InviteMembersOutput";
export * from "../types/InviteMembersExceptionsUnion";

export class InviteMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InviteMembersInput,
      OutputTypesUnion,
      InviteMembersOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = InviteMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InviteMembersInput,
    InviteMembersOutput,
    Blob
  >();

  constructor(readonly input: InviteMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<InviteMembersInput, InviteMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InviteMembersInput, InviteMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
