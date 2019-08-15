import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedInstancesModifications } from "../model/operations/DescribeReservedInstancesModifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedInstancesModificationsInput } from "../types/DescribeReservedInstancesModificationsInput";
import { DescribeReservedInstancesModificationsOutput } from "../types/DescribeReservedInstancesModificationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeReservedInstancesModificationsInput";
export * from "../types/DescribeReservedInstancesModificationsOutput";
export * from "../types/DescribeReservedInstancesModificationsExceptionsUnion";

export class DescribeReservedInstancesModificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedInstancesModificationsInput,
      OutputTypesUnion,
      DescribeReservedInstancesModificationsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedInstancesModifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedInstancesModificationsInput,
    DescribeReservedInstancesModificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedInstancesModificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedInstancesModificationsInput,
    DescribeReservedInstancesModificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedInstancesModificationsInput,
        DescribeReservedInstancesModificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
