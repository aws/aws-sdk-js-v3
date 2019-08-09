import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMetricCollectionTypes } from "../model/DescribeMetricCollectionTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMetricCollectionTypesInput } from "../types/DescribeMetricCollectionTypesInput";
import { DescribeMetricCollectionTypesOutput } from "../types/DescribeMetricCollectionTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeMetricCollectionTypesInput";
export * from "../types/DescribeMetricCollectionTypesOutput";
export * from "../types/DescribeMetricCollectionTypesExceptionsUnion";

export class DescribeMetricCollectionTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMetricCollectionTypesInput,
      OutputTypesUnion,
      DescribeMetricCollectionTypesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMetricCollectionTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMetricCollectionTypesInput,
    DescribeMetricCollectionTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMetricCollectionTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMetricCollectionTypesInput,
    DescribeMetricCollectionTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMetricCollectionTypesInput,
        DescribeMetricCollectionTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
