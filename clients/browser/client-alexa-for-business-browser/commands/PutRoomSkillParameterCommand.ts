import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRoomSkillParameter } from "../model/operations/PutRoomSkillParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRoomSkillParameterInput } from "../types/PutRoomSkillParameterInput";
import { PutRoomSkillParameterOutput } from "../types/PutRoomSkillParameterOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/PutRoomSkillParameterInput";
export * from "../types/PutRoomSkillParameterOutput";
export * from "../types/PutRoomSkillParameterExceptionsUnion";

export class PutRoomSkillParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRoomSkillParameterInput,
      OutputTypesUnion,
      PutRoomSkillParameterOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = PutRoomSkillParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRoomSkillParameterInput,
    PutRoomSkillParameterOutput,
    Blob
  >();

  constructor(readonly input: PutRoomSkillParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRoomSkillParameterInput,
    PutRoomSkillParameterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRoomSkillParameterInput, PutRoomSkillParameterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
