import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSkillGroup } from "../model/DeleteSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSkillGroupInput } from "../types/DeleteSkillGroupInput";
import { DeleteSkillGroupOutput } from "../types/DeleteSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteSkillGroupInput";
export * from "../types/DeleteSkillGroupOutput";
export * from "../types/DeleteSkillGroupExceptionsUnion";

export class DeleteSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSkillGroupInput,
      OutputTypesUnion,
      DeleteSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSkillGroupInput,
    DeleteSkillGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSkillGroupInput, DeleteSkillGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSkillGroupInput, DeleteSkillGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
