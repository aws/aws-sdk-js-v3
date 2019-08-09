import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateSkillWithUsers } from "../model/AssociateSkillWithUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateSkillWithUsersInput } from "../types/AssociateSkillWithUsersInput";
import { AssociateSkillWithUsersOutput } from "../types/AssociateSkillWithUsersOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateSkillWithUsersInput";
export * from "../types/AssociateSkillWithUsersOutput";
export * from "../types/AssociateSkillWithUsersExceptionsUnion";

export class AssociateSkillWithUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateSkillWithUsersInput,
      OutputTypesUnion,
      AssociateSkillWithUsersOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateSkillWithUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateSkillWithUsersInput,
    AssociateSkillWithUsersOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateSkillWithUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateSkillWithUsersInput,
    AssociateSkillWithUsersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateSkillWithUsersInput, AssociateSkillWithUsersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
