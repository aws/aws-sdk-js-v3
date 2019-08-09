import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateSkillFromUsers } from "../model/DisassociateSkillFromUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateSkillFromUsersInput } from "../types/DisassociateSkillFromUsersInput";
import { DisassociateSkillFromUsersOutput } from "../types/DisassociateSkillFromUsersOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DisassociateSkillFromUsersInput";
export * from "../types/DisassociateSkillFromUsersOutput";
export * from "../types/DisassociateSkillFromUsersExceptionsUnion";

export class DisassociateSkillFromUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateSkillFromUsersInput,
      OutputTypesUnion,
      DisassociateSkillFromUsersOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateSkillFromUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateSkillFromUsersInput,
    DisassociateSkillFromUsersOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateSkillFromUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateSkillFromUsersInput,
    DisassociateSkillFromUsersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateSkillFromUsersInput,
        DisassociateSkillFromUsersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
