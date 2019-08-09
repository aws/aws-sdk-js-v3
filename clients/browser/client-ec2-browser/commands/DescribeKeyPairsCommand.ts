import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeKeyPairs } from "../model/DescribeKeyPairs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeKeyPairsInput } from "../types/DescribeKeyPairsInput";
import { DescribeKeyPairsOutput } from "../types/DescribeKeyPairsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeKeyPairsInput";
export * from "../types/DescribeKeyPairsOutput";
export * from "../types/DescribeKeyPairsExceptionsUnion";

export class DescribeKeyPairsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeKeyPairsInput,
      OutputTypesUnion,
      DescribeKeyPairsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeKeyPairs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeKeyPairsInput,
    DescribeKeyPairsOutput,
    Blob
  >();

  constructor(readonly input: DescribeKeyPairsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeKeyPairsInput, DescribeKeyPairsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeKeyPairsInput, DescribeKeyPairsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
