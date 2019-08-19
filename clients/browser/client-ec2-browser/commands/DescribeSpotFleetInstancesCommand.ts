import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSpotFleetInstances } from "../model/operations/DescribeSpotFleetInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotFleetInstancesInput } from "../types/DescribeSpotFleetInstancesInput";
import { DescribeSpotFleetInstancesOutput } from "../types/DescribeSpotFleetInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotFleetInstancesInput";
export * from "../types/DescribeSpotFleetInstancesOutput";
export * from "../types/DescribeSpotFleetInstancesExceptionsUnion";

export class DescribeSpotFleetInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotFleetInstancesInput,
      OutputTypesUnion,
      DescribeSpotFleetInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSpotFleetInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotFleetInstancesInput,
    DescribeSpotFleetInstancesOutput,
    Blob
  >();

  constructor(readonly input: DescribeSpotFleetInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotFleetInstancesInput,
    DescribeSpotFleetInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSpotFleetInstancesInput,
        DescribeSpotFleetInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
