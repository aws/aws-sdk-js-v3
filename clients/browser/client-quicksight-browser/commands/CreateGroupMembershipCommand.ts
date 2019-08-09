import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateGroupMembership } from "../model/CreateGroupMembership";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGroupMembershipInput } from "../types/CreateGroupMembershipInput";
import { CreateGroupMembershipOutput } from "../types/CreateGroupMembershipOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/CreateGroupMembershipInput";
export * from "../types/CreateGroupMembershipOutput";
export * from "../types/CreateGroupMembershipExceptionsUnion";

export class CreateGroupMembershipCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGroupMembershipInput,
      OutputTypesUnion,
      CreateGroupMembershipOutput,
      QuickSightResolvedConfiguration,
      Blob
    > {
  readonly model = CreateGroupMembership;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGroupMembershipInput,
    CreateGroupMembershipOutput,
    Blob
  >();

  constructor(readonly input: CreateGroupMembershipInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGroupMembershipInput,
    CreateGroupMembershipOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGroupMembershipInput, CreateGroupMembershipOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
