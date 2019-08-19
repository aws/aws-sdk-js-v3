import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStackSetOperation } from "../model/operations/DescribeStackSetOperation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackSetOperationInput } from "../types/DescribeStackSetOperationInput";
import { DescribeStackSetOperationOutput } from "../types/DescribeStackSetOperationOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackSetOperationInput";
export * from "../types/DescribeStackSetOperationOutput";
export * from "../types/DescribeStackSetOperationExceptionsUnion";

export class DescribeStackSetOperationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackSetOperationInput,
      OutputTypesUnion,
      DescribeStackSetOperationOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStackSetOperation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackSetOperationInput,
    DescribeStackSetOperationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStackSetOperationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackSetOperationInput,
    DescribeStackSetOperationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackSetOperationInput, DescribeStackSetOperationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
