import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSubnets } from "../model/DescribeSubnets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubnetsInput } from "../types/DescribeSubnetsInput";
import { DescribeSubnetsOutput } from "../types/DescribeSubnetsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSubnetsInput";
export * from "../types/DescribeSubnetsOutput";
export * from "../types/DescribeSubnetsExceptionsUnion";

export class DescribeSubnetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubnetsInput,
      OutputTypesUnion,
      DescribeSubnetsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSubnets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubnetsInput,
    DescribeSubnetsOutput,
    Blob
  >();

  constructor(readonly input: DescribeSubnetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSubnetsInput, DescribeSubnetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSubnetsInput, DescribeSubnetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
