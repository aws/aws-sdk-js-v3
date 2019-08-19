import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RejectSkill } from "../model/operations/RejectSkill";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectSkillInput } from "../types/RejectSkillInput";
import { RejectSkillOutput } from "../types/RejectSkillOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/RejectSkillInput";
export * from "../types/RejectSkillOutput";
export * from "../types/RejectSkillExceptionsUnion";

export class RejectSkillCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectSkillInput,
      OutputTypesUnion,
      RejectSkillOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RejectSkill;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectSkillInput,
    RejectSkillOutput,
    _stream.Readable
  >();

  constructor(readonly input: RejectSkillInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<RejectSkillInput, RejectSkillOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectSkillInput, RejectSkillOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
