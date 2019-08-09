import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ApproveSkill } from "../model/ApproveSkill";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApproveSkillInput } from "../types/ApproveSkillInput";
import { ApproveSkillOutput } from "../types/ApproveSkillOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ApproveSkillInput";
export * from "../types/ApproveSkillOutput";
export * from "../types/ApproveSkillExceptionsUnion";

export class ApproveSkillCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApproveSkillInput,
      OutputTypesUnion,
      ApproveSkillOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = ApproveSkill;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApproveSkillInput,
    ApproveSkillOutput,
    Blob
  >();

  constructor(readonly input: ApproveSkillInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<ApproveSkillInput, ApproveSkillOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ApproveSkillInput, ApproveSkillOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
