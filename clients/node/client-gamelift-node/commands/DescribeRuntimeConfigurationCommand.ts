import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRuntimeConfiguration } from "../model/operations/DescribeRuntimeConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRuntimeConfigurationInput } from "../types/DescribeRuntimeConfigurationInput";
import { DescribeRuntimeConfigurationOutput } from "../types/DescribeRuntimeConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeRuntimeConfigurationInput";
export * from "../types/DescribeRuntimeConfigurationOutput";
export * from "../types/DescribeRuntimeConfigurationExceptionsUnion";

export class DescribeRuntimeConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRuntimeConfigurationInput,
      OutputTypesUnion,
      DescribeRuntimeConfigurationOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRuntimeConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRuntimeConfigurationInput,
    DescribeRuntimeConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRuntimeConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRuntimeConfigurationInput,
    DescribeRuntimeConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRuntimeConfigurationInput,
        DescribeRuntimeConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
