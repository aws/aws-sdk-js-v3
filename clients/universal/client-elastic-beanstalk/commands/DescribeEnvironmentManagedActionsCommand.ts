import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironmentManagedActions } from "../model/DescribeEnvironmentManagedActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentManagedActionsInput } from "../types/DescribeEnvironmentManagedActionsInput";
import { DescribeEnvironmentManagedActionsOutput } from "../types/DescribeEnvironmentManagedActionsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeEnvironmentManagedActionsInput";
export * from "../types/DescribeEnvironmentManagedActionsOutput";
export * from "../types/DescribeEnvironmentManagedActionsExceptionsUnion";

export class DescribeEnvironmentManagedActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentManagedActionsInput,
      OutputTypesUnion,
      DescribeEnvironmentManagedActionsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEnvironmentManagedActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentManagedActionsInput,
    DescribeEnvironmentManagedActionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEnvironmentManagedActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentManagedActionsInput,
    DescribeEnvironmentManagedActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEnvironmentManagedActionsInput,
        DescribeEnvironmentManagedActionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
