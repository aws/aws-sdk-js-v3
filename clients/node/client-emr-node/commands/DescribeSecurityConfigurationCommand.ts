import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSecurityConfiguration } from "../model/DescribeSecurityConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSecurityConfigurationInput } from "../types/DescribeSecurityConfigurationInput";
import { DescribeSecurityConfigurationOutput } from "../types/DescribeSecurityConfigurationOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/DescribeSecurityConfigurationInput";
export * from "../types/DescribeSecurityConfigurationOutput";
export * from "../types/DescribeSecurityConfigurationExceptionsUnion";

export class DescribeSecurityConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSecurityConfigurationInput,
      OutputTypesUnion,
      DescribeSecurityConfigurationOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSecurityConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSecurityConfigurationInput,
    DescribeSecurityConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSecurityConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSecurityConfigurationInput,
    DescribeSecurityConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSecurityConfigurationInput,
        DescribeSecurityConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
