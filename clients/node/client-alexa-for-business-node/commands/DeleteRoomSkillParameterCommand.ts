import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRoomSkillParameter } from "../model/DeleteRoomSkillParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRoomSkillParameterInput } from "../types/DeleteRoomSkillParameterInput";
import { DeleteRoomSkillParameterOutput } from "../types/DeleteRoomSkillParameterOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteRoomSkillParameterInput";
export * from "../types/DeleteRoomSkillParameterOutput";
export * from "../types/DeleteRoomSkillParameterExceptionsUnion";

export class DeleteRoomSkillParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRoomSkillParameterInput,
      OutputTypesUnion,
      DeleteRoomSkillParameterOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRoomSkillParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRoomSkillParameterInput,
    DeleteRoomSkillParameterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRoomSkillParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRoomSkillParameterInput,
    DeleteRoomSkillParameterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRoomSkillParameterInput, DeleteRoomSkillParameterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
