import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateSkillFromSkillGroup } from "../model/DisassociateSkillFromSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateSkillFromSkillGroupInput } from "../types/DisassociateSkillFromSkillGroupInput";
import { DisassociateSkillFromSkillGroupOutput } from "../types/DisassociateSkillFromSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DisassociateSkillFromSkillGroupInput";
export * from "../types/DisassociateSkillFromSkillGroupOutput";
export * from "../types/DisassociateSkillFromSkillGroupExceptionsUnion";

export class DisassociateSkillFromSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateSkillFromSkillGroupInput,
      OutputTypesUnion,
      DisassociateSkillFromSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateSkillFromSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateSkillFromSkillGroupInput,
    DisassociateSkillFromSkillGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateSkillFromSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateSkillFromSkillGroupInput,
    DisassociateSkillFromSkillGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateSkillFromSkillGroupInput,
        DisassociateSkillFromSkillGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
