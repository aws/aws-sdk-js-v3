import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateSkillWithSkillGroup } from "../model/AssociateSkillWithSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateSkillWithSkillGroupInput } from "../types/AssociateSkillWithSkillGroupInput";
import { AssociateSkillWithSkillGroupOutput } from "../types/AssociateSkillWithSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateSkillWithSkillGroupInput";
export * from "../types/AssociateSkillWithSkillGroupOutput";
export * from "../types/AssociateSkillWithSkillGroupExceptionsUnion";

export class AssociateSkillWithSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateSkillWithSkillGroupInput,
      OutputTypesUnion,
      AssociateSkillWithSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateSkillWithSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateSkillWithSkillGroupInput,
    AssociateSkillWithSkillGroupOutput,
    Blob
  >();

  constructor(readonly input: AssociateSkillWithSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateSkillWithSkillGroupInput,
    AssociateSkillWithSkillGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateSkillWithSkillGroupInput,
        AssociateSkillWithSkillGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
