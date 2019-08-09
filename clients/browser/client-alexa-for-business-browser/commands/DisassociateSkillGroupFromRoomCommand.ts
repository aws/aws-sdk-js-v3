import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateSkillGroupFromRoom } from "../model/DisassociateSkillGroupFromRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateSkillGroupFromRoomInput } from "../types/DisassociateSkillGroupFromRoomInput";
import { DisassociateSkillGroupFromRoomOutput } from "../types/DisassociateSkillGroupFromRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DisassociateSkillGroupFromRoomInput";
export * from "../types/DisassociateSkillGroupFromRoomOutput";
export * from "../types/DisassociateSkillGroupFromRoomExceptionsUnion";

export class DisassociateSkillGroupFromRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateSkillGroupFromRoomInput,
      OutputTypesUnion,
      DisassociateSkillGroupFromRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateSkillGroupFromRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateSkillGroupFromRoomInput,
    DisassociateSkillGroupFromRoomOutput,
    Blob
  >();

  constructor(readonly input: DisassociateSkillGroupFromRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateSkillGroupFromRoomInput,
    DisassociateSkillGroupFromRoomOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateSkillGroupFromRoomInput,
        DisassociateSkillGroupFromRoomOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
