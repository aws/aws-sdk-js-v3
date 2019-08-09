import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeApplicationState } from "../model/DescribeApplicationState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationStateInput } from "../types/DescribeApplicationStateInput";
import { DescribeApplicationStateOutput } from "../types/DescribeApplicationStateOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/DescribeApplicationStateInput";
export * from "../types/DescribeApplicationStateOutput";
export * from "../types/DescribeApplicationStateExceptionsUnion";

export class DescribeApplicationStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationStateInput,
      OutputTypesUnion,
      DescribeApplicationStateOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeApplicationState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationStateInput,
    DescribeApplicationStateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeApplicationStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationStateInput,
    DescribeApplicationStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeApplicationStateInput, DescribeApplicationStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
