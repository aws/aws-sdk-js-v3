import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClusterOperation } from "../model/operations/DescribeClusterOperation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterOperationInput } from "../types/DescribeClusterOperationInput";
import { DescribeClusterOperationOutput } from "../types/DescribeClusterOperationOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/DescribeClusterOperationInput";
export * from "../types/DescribeClusterOperationOutput";
export * from "../types/DescribeClusterOperationExceptionsUnion";

export class DescribeClusterOperationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterOperationInput,
      OutputTypesUnion,
      DescribeClusterOperationOutput,
      KafkaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClusterOperation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterOperationInput,
    DescribeClusterOperationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClusterOperationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterOperationInput,
    DescribeClusterOperationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterOperationInput, DescribeClusterOperationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
