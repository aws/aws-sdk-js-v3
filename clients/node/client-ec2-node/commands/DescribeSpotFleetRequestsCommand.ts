import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSpotFleetRequests } from "../model/DescribeSpotFleetRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotFleetRequestsInput } from "../types/DescribeSpotFleetRequestsInput";
import { DescribeSpotFleetRequestsOutput } from "../types/DescribeSpotFleetRequestsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotFleetRequestsInput";
export * from "../types/DescribeSpotFleetRequestsOutput";
export * from "../types/DescribeSpotFleetRequestsExceptionsUnion";

export class DescribeSpotFleetRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotFleetRequestsInput,
      OutputTypesUnion,
      DescribeSpotFleetRequestsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSpotFleetRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotFleetRequestsInput,
    DescribeSpotFleetRequestsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSpotFleetRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotFleetRequestsInput,
    DescribeSpotFleetRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSpotFleetRequestsInput, DescribeSpotFleetRequestsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
