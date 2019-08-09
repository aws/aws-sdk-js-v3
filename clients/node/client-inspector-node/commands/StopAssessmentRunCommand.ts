import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopAssessmentRun } from "../model/StopAssessmentRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopAssessmentRunInput } from "../types/StopAssessmentRunInput";
import { StopAssessmentRunOutput } from "../types/StopAssessmentRunOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/StopAssessmentRunInput";
export * from "../types/StopAssessmentRunOutput";
export * from "../types/StopAssessmentRunExceptionsUnion";

export class StopAssessmentRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopAssessmentRunInput,
      OutputTypesUnion,
      StopAssessmentRunOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopAssessmentRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopAssessmentRunInput,
    StopAssessmentRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopAssessmentRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<StopAssessmentRunInput, StopAssessmentRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopAssessmentRunInput, StopAssessmentRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
