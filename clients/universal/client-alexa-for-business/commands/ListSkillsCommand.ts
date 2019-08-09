import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSkills } from "../model/ListSkills";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSkillsInput } from "../types/ListSkillsInput";
import { ListSkillsOutput } from "../types/ListSkillsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListSkillsInput";
export * from "../types/ListSkillsOutput";
export * from "../types/ListSkillsExceptionsUnion";

export class ListSkillsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSkillsInput,
      OutputTypesUnion,
      ListSkillsOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSkills;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSkillsInput,
    ListSkillsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSkillsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSkillsInput, ListSkillsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSkillsInput, ListSkillsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
