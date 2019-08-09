import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBInstances } from "../model/DescribeDBInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBInstancesInput } from "../types/DescribeDBInstancesInput";
import { DescribeDBInstancesOutput } from "../types/DescribeDBInstancesOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribeDBInstancesInput";
export * from "../types/DescribeDBInstancesOutput";
export * from "../types/DescribeDBInstancesExceptionsUnion";

export class DescribeDBInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBInstancesInput,
      OutputTypesUnion,
      DescribeDBInstancesOutput,
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDBInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBInstancesInput,
    DescribeDBInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDBInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBInstancesInput,
    DescribeDBInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBInstancesInput, DescribeDBInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
