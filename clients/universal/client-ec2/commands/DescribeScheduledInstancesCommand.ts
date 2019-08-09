import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScheduledInstances } from "../model/DescribeScheduledInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledInstancesInput } from "../types/DescribeScheduledInstancesInput";
import { DescribeScheduledInstancesOutput } from "../types/DescribeScheduledInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeScheduledInstancesInput";
export * from "../types/DescribeScheduledInstancesOutput";
export * from "../types/DescribeScheduledInstancesExceptionsUnion";

export class DescribeScheduledInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduledInstancesInput,
      OutputTypesUnion,
      DescribeScheduledInstancesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeScheduledInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledInstancesInput,
    DescribeScheduledInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeScheduledInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScheduledInstancesInput,
    DescribeScheduledInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeScheduledInstancesInput,
        DescribeScheduledInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
