import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EvaluateExpression } from "../model/operations/EvaluateExpression";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EvaluateExpressionInput } from "../types/EvaluateExpressionInput";
import { EvaluateExpressionOutput } from "../types/EvaluateExpressionOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/EvaluateExpressionInput";
export * from "../types/EvaluateExpressionOutput";
export * from "../types/EvaluateExpressionExceptionsUnion";

export class EvaluateExpressionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EvaluateExpressionInput,
      OutputTypesUnion,
      EvaluateExpressionOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EvaluateExpression;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EvaluateExpressionInput,
    EvaluateExpressionOutput,
    _stream.Readable
  >();

  constructor(readonly input: EvaluateExpressionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EvaluateExpressionInput,
    EvaluateExpressionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EvaluateExpressionInput, EvaluateExpressionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
