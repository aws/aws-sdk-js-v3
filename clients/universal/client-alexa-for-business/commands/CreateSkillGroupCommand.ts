import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSkillGroup } from "../model/CreateSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSkillGroupInput } from "../types/CreateSkillGroupInput";
import { CreateSkillGroupOutput } from "../types/CreateSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateSkillGroupInput";
export * from "../types/CreateSkillGroupOutput";
export * from "../types/CreateSkillGroupExceptionsUnion";

export class CreateSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSkillGroupInput,
      OutputTypesUnion,
      CreateSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSkillGroupInput,
    CreateSkillGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSkillGroupInput, CreateSkillGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSkillGroupInput, CreateSkillGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
