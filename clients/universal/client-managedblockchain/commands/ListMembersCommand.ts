import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMembers } from "../model/ListMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMembersInput } from "../types/ListMembersInput";
import { ListMembersOutput } from "../types/ListMembersOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListMembersInput";
export * from "../types/ListMembersOutput";
export * from "../types/ListMembersExceptionsUnion";

export class ListMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMembersInput,
      OutputTypesUnion,
      ListMembersOutput,
      ManagedBlockchainResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMembersInput,
    ListMembersOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListMembersInput, ListMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMembersInput, ListMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
