import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedInstances } from "../model/DescribeReservedInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedInstancesInput } from "../types/DescribeReservedInstancesInput";
import { DescribeReservedInstancesOutput } from "../types/DescribeReservedInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeReservedInstancesInput";
export * from "../types/DescribeReservedInstancesOutput";
export * from "../types/DescribeReservedInstancesExceptionsUnion";

export class DescribeReservedInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedInstancesInput,
      OutputTypesUnion,
      DescribeReservedInstancesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedInstancesInput,
    DescribeReservedInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedInstancesInput,
    DescribeReservedInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReservedInstancesInput, DescribeReservedInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
