import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRdsDbInstances } from "../model/DescribeRdsDbInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRdsDbInstancesInput } from "../types/DescribeRdsDbInstancesInput";
import { DescribeRdsDbInstancesOutput } from "../types/DescribeRdsDbInstancesOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeRdsDbInstancesInput";
export * from "../types/DescribeRdsDbInstancesOutput";
export * from "../types/DescribeRdsDbInstancesExceptionsUnion";

export class DescribeRdsDbInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRdsDbInstancesInput,
      OutputTypesUnion,
      DescribeRdsDbInstancesOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRdsDbInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRdsDbInstancesInput,
    DescribeRdsDbInstancesOutput,
    Blob
  >();

  constructor(readonly input: DescribeRdsDbInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRdsDbInstancesInput,
    DescribeRdsDbInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRdsDbInstancesInput, DescribeRdsDbInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
