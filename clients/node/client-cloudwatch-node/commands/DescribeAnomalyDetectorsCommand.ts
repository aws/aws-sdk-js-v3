import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAnomalyDetectors } from "../model/operations/DescribeAnomalyDetectors";
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
      _stream.Readable
    > {
  readonly model = DescribeAnomalyDetectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAnomalyDetectorsInput,
    DescribeAnomalyDetectorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAnomalyDetectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
