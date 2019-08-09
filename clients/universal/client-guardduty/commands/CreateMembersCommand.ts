import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMembers } from "../model/CreateMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMembersInput } from "../types/CreateMembersInput";
import { CreateMembersOutput } from "../types/CreateMembersOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateMembersInput";
export * from "../types/CreateMembersOutput";
export * from "../types/CreateMembersExceptionsUnion";

export class CreateMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMembersInput,
      OutputTypesUnion,
      CreateMembersOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMembersInput,
    CreateMembersOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMembersInput, CreateMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMembersInput, CreateMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
