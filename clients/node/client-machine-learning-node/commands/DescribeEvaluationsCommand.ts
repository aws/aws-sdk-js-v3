import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEvaluations } from "../model/DescribeEvaluations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEvaluationsInput } from "../types/DescribeEvaluationsInput";
import { DescribeEvaluationsOutput } from "../types/DescribeEvaluationsOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DescribeEvaluationsInput";
export * from "../types/DescribeEvaluationsOutput";
export * from "../types/DescribeEvaluationsExceptionsUnion";

export class DescribeEvaluationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEvaluationsInput,
      OutputTypesUnion,
      DescribeEvaluationsOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEvaluations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEvaluationsInput,
    DescribeEvaluationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEvaluationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEvaluationsInput,
    DescribeEvaluationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEvaluationsInput, DescribeEvaluationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
