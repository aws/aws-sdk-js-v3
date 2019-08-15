import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLifecycleHookTypes } from "../model/operations/DescribeLifecycleHookTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLifecycleHookTypesInput } from "../types/DescribeLifecycleHookTypesInput";
import { DescribeLifecycleHookTypesOutput } from "../types/DescribeLifecycleHookTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeLifecycleHookTypesInput";
export * from "../types/DescribeLifecycleHookTypesOutput";
export * from "../types/DescribeLifecycleHookTypesExceptionsUnion";

export class DescribeLifecycleHookTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLifecycleHookTypesInput,
      OutputTypesUnion,
      DescribeLifecycleHookTypesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLifecycleHookTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLifecycleHookTypesInput,
    DescribeLifecycleHookTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLifecycleHookTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLifecycleHookTypesInput,
    DescribeLifecycleHookTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLifecycleHookTypesInput,
        DescribeLifecycleHookTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
