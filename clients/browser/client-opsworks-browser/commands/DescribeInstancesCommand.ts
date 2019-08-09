import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInstances } from "../model/DescribeInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstancesInput } from "../types/DescribeInstancesInput";
import { DescribeInstancesOutput } from "../types/DescribeInstancesOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeInstancesInput";
export * from "../types/DescribeInstancesOutput";
export * from "../types/DescribeInstancesExceptionsUnion";

export class DescribeInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstancesInput,
      OutputTypesUnion,
      DescribeInstancesOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstancesInput,
    DescribeInstancesOutput,
    Blob
  >();

  constructor(readonly input: DescribeInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeInstancesInput, DescribeInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstancesInput, DescribeInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
