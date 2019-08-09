import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConfigurationRevision } from "../model/DescribeConfigurationRevision";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationRevisionInput } from "../types/DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "../types/DescribeConfigurationRevisionOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeConfigurationRevisionInput";
export * from "../types/DescribeConfigurationRevisionOutput";
export * from "../types/DescribeConfigurationRevisionExceptionsUnion";

export class DescribeConfigurationRevisionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationRevisionInput,
      OutputTypesUnion,
      DescribeConfigurationRevisionOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConfigurationRevision;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationRevisionInput,
    DescribeConfigurationRevisionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConfigurationRevisionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationRevisionInput,
    DescribeConfigurationRevisionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationRevisionInput,
        DescribeConfigurationRevisionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
