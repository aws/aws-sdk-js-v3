import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAnomalyDetectors } from "../model/DescribeAnomalyDetectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAnomalyDetectorsInput } from "../types/DescribeAnomalyDetectorsInput";
import { DescribeAnomalyDetectorsOutput } from "../types/DescribeAnomalyDetectorsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DescribeAnomalyDetectorsInput";
export * from "../types/DescribeAnomalyDetectorsOutput";
export * from "../types/DescribeAnomalyDetectorsExceptionsUnion";

export class DescribeAnomalyDetectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAnomalyDetectorsInput,
      OutputTypesUnion,
      DescribeAnomalyDetectorsOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAnomalyDetectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAnomalyDetectorsInput,
    DescribeAnomalyDetectorsOutput,
    Blob
  >();

  constructor(readonly input: DescribeAnomalyDetectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAnomalyDetectorsInput,
    DescribeAnomalyDetectorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAnomalyDetectorsInput, DescribeAnomalyDetectorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
