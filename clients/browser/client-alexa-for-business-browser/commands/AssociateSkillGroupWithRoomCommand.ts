import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateSkillGroupWithRoom } from "../model/AssociateSkillGroupWithRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateSkillGroupWithRoomInput } from "../types/AssociateSkillGroupWithRoomInput";
import { AssociateSkillGroupWithRoomOutput } from "../types/AssociateSkillGroupWithRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateSkillGroupWithRoomInput";
export * from "../types/AssociateSkillGroupWithRoomOutput";
export * from "../types/AssociateSkillGroupWithRoomExceptionsUnion";

export class AssociateSkillGroupWithRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateSkillGroupWithRoomInput,
      OutputTypesUnion,
      AssociateSkillGroupWithRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateSkillGroupWithRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateSkillGroupWithRoomInput,
    AssociateSkillGroupWithRoomOutput,
    Blob
  >();

  constructor(readonly input: AssociateSkillGroupWithRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateSkillGroupWithRoomInput,
    AssociateSkillGroupWithRoomOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateSkillGroupWithRoomInput,
        AssociateSkillGroupWithRoomOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
