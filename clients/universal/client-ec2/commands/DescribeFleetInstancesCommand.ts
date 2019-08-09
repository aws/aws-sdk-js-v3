import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFleetInstances } from "../model/DescribeFleetInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetInstancesInput } from "../types/DescribeFleetInstancesInput";
import { DescribeFleetInstancesOutput } from "../types/DescribeFleetInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeFleetInstancesInput";
export * from "../types/DescribeFleetInstancesOutput";
export * from "../types/DescribeFleetInstancesExceptionsUnion";

export class DescribeFleetInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetInstancesInput,
      OutputTypesUnion,
      DescribeFleetInstancesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFleetInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetInstancesInput,
    DescribeFleetInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFleetInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetInstancesInput,
    DescribeFleetInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetInstancesInput, DescribeFleetInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
