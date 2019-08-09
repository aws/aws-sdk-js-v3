import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSpotInstanceRequests } from "../model/DescribeSpotInstanceRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotInstanceRequestsInput } from "../types/DescribeSpotInstanceRequestsInput";
import { DescribeSpotInstanceRequestsOutput } from "../types/DescribeSpotInstanceRequestsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotInstanceRequestsInput";
export * from "../types/DescribeSpotInstanceRequestsOutput";
export * from "../types/DescribeSpotInstanceRequestsExceptionsUnion";

export class DescribeSpotInstanceRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotInstanceRequestsInput,
      OutputTypesUnion,
      DescribeSpotInstanceRequestsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSpotInstanceRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotInstanceRequestsInput,
    DescribeSpotInstanceRequestsOutput,
    Blob
  >();

  constructor(readonly input: DescribeSpotInstanceRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotInstanceRequestsInput,
    DescribeSpotInstanceRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSpotInstanceRequestsInput,
        DescribeSpotInstanceRequestsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
