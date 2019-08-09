import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSpotFleetRequestHistory } from "../model/DescribeSpotFleetRequestHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotFleetRequestHistoryInput } from "../types/DescribeSpotFleetRequestHistoryInput";
import { DescribeSpotFleetRequestHistoryOutput } from "../types/DescribeSpotFleetRequestHistoryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotFleetRequestHistoryInput";
export * from "../types/DescribeSpotFleetRequestHistoryOutput";
export * from "../types/DescribeSpotFleetRequestHistoryExceptionsUnion";

export class DescribeSpotFleetRequestHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotFleetRequestHistoryInput,
      OutputTypesUnion,
      DescribeSpotFleetRequestHistoryOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSpotFleetRequestHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotFleetRequestHistoryInput,
    DescribeSpotFleetRequestHistoryOutput,
    Blob
  >();

  constructor(readonly input: DescribeSpotFleetRequestHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotFleetRequestHistoryInput,
    DescribeSpotFleetRequestHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSpotFleetRequestHistoryInput,
        DescribeSpotFleetRequestHistoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
