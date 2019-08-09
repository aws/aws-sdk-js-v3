import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLifecycleConfiguration } from "../model/DescribeLifecycleConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLifecycleConfigurationInput } from "../types/DescribeLifecycleConfigurationInput";
import { DescribeLifecycleConfigurationOutput } from "../types/DescribeLifecycleConfigurationOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DescribeLifecycleConfigurationInput";
export * from "../types/DescribeLifecycleConfigurationOutput";
export * from "../types/DescribeLifecycleConfigurationExceptionsUnion";

export class DescribeLifecycleConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLifecycleConfigurationInput,
      OutputTypesUnion,
      DescribeLifecycleConfigurationOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeLifecycleConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLifecycleConfigurationInput,
    DescribeLifecycleConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeLifecycleConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLifecycleConfigurationInput,
    DescribeLifecycleConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLifecycleConfigurationInput,
        DescribeLifecycleConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
