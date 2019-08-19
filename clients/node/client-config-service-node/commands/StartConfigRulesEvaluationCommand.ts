import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartConfigRulesEvaluation } from "../model/operations/StartConfigRulesEvaluation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartConfigRulesEvaluationInput } from "../types/StartConfigRulesEvaluationInput";
import { StartConfigRulesEvaluationOutput } from "../types/StartConfigRulesEvaluationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/StartConfigRulesEvaluationInput";
export * from "../types/StartConfigRulesEvaluationOutput";
export * from "../types/StartConfigRulesEvaluationExceptionsUnion";

export class StartConfigRulesEvaluationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartConfigRulesEvaluationInput,
      OutputTypesUnion,
      StartConfigRulesEvaluationOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartConfigRulesEvaluation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartConfigRulesEvaluationInput,
    StartConfigRulesEvaluationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartConfigRulesEvaluationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartConfigRulesEvaluationInput,
    StartConfigRulesEvaluationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartConfigRulesEvaluationInput,
        StartConfigRulesEvaluationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
