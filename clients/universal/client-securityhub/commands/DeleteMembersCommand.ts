import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMembers } from "../model/DeleteMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMembersInput } from "../types/DeleteMembersInput";
import { DeleteMembersOutput } from "../types/DeleteMembersOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DeleteMembersInput";
export * from "../types/DeleteMembersOutput";
export * from "../types/DeleteMembersExceptionsUnion";

export class DeleteMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMembersInput,
      OutputTypesUnion,
      DeleteMembersOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMembersInput,
    DeleteMembersOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMembersInput, DeleteMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMembersInput, DeleteMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
