import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateTeamMember } from "../model/AssociateTeamMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateTeamMemberInput } from "../types/AssociateTeamMemberInput";
import { AssociateTeamMemberOutput } from "../types/AssociateTeamMemberOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/AssociateTeamMemberInput";
export * from "../types/AssociateTeamMemberOutput";
export * from "../types/AssociateTeamMemberExceptionsUnion";

export class AssociateTeamMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateTeamMemberInput,
      OutputTypesUnion,
      AssociateTeamMemberOutput,
      CodeStarResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateTeamMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateTeamMemberInput,
    AssociateTeamMemberOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateTeamMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateTeamMemberInput,
    AssociateTeamMemberOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateTeamMemberInput, AssociateTeamMemberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
