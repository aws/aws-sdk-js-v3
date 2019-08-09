import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRoomSkillParameter } from "../model/GetRoomSkillParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRoomSkillParameterInput } from "../types/GetRoomSkillParameterInput";
import { GetRoomSkillParameterOutput } from "../types/GetRoomSkillParameterOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetRoomSkillParameterInput";
export * from "../types/GetRoomSkillParameterOutput";
export * from "../types/GetRoomSkillParameterExceptionsUnion";

export class GetRoomSkillParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRoomSkillParameterInput,
      OutputTypesUnion,
      GetRoomSkillParameterOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRoomSkillParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRoomSkillParameterInput,
    GetRoomSkillParameterOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRoomSkillParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRoomSkillParameterInput,
    GetRoomSkillParameterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRoomSkillParameterInput, GetRoomSkillParameterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
