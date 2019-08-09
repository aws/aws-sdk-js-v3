import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedDBInstances } from "../model/DescribeReservedDBInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedDBInstancesInput } from "../types/DescribeReservedDBInstancesInput";
import { DescribeReservedDBInstancesOutput } from "../types/DescribeReservedDBInstancesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeReservedDBInstancesInput";
export * from "../types/DescribeReservedDBInstancesOutput";
export * from "../types/DescribeReservedDBInstancesExceptionsUnion";

export class DescribeReservedDBInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedDBInstancesInput,
      OutputTypesUnion,
      DescribeReservedDBInstancesOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReservedDBInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedDBInstancesInput,
    DescribeReservedDBInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReservedDBInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedDBInstancesInput,
    DescribeReservedDBInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedDBInstancesInput,
        DescribeReservedDBInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
