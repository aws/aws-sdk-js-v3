import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInvitations } from "../model/DeleteInvitations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInvitationsInput } from "../types/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "../types/DeleteInvitationsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/DeleteInvitationsInput";
export * from "../types/DeleteInvitationsOutput";
export * from "../types/DeleteInvitationsExceptionsUnion";

export class DeleteInvitationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInvitationsInput,
      OutputTypesUnion,
      DeleteInvitationsOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteInvitations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInvitationsInput,
    DeleteInvitationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteInvitationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInvitationsInput, DeleteInvitationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInvitationsInput, DeleteInvitationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
