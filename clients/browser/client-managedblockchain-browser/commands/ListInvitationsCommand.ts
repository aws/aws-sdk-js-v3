import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInvitations } from "../model/operations/ListInvitations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInvitationsInput } from "../types/ListInvitationsInput";
import { ListInvitationsOutput } from "../types/ListInvitationsOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListInvitationsInput";
export * from "../types/ListInvitationsOutput";
export * from "../types/ListInvitationsExceptionsUnion";

export class ListInvitationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInvitationsInput,
      OutputTypesUnion,
      ListInvitationsOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = ListInvitations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInvitationsInput,
    ListInvitationsOutput,
    Blob
  >();

  constructor(readonly input: ListInvitationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListInvitationsInput, ListInvitationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInvitationsInput, ListInvitationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
