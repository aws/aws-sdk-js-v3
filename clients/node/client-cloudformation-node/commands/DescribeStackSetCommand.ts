import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStackSet } from "../model/operations/DescribeStackSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackSetInput } from "../types/DescribeStackSetInput";
import { DescribeStackSetOutput } from "../types/DescribeStackSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackSetInput";
export * from "../types/DescribeStackSetOutput";
export * from "../types/DescribeStackSetExceptionsUnion";

export class DescribeStackSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackSetInput,
      OutputTypesUnion,
      DescribeStackSetOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStackSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackSetInput,
    DescribeStackSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStackSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStackSetInput, DescribeStackSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackSetInput, DescribeStackSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
