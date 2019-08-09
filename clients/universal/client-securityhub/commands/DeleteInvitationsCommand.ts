import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInvitations } from "../model/DeleteInvitations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInvitationsInput } from "../types/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "../types/DeleteInvitationsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
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
      SecurityHubResolvedConfiguration,
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
    configuration: SecurityHubResolvedConfiguration
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
