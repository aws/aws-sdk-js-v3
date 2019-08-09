import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcs } from "../model/DescribeVpcs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcsInput } from "../types/DescribeVpcsInput";
import { DescribeVpcsOutput } from "../types/DescribeVpcsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcsInput";
export * from "../types/DescribeVpcsOutput";
export * from "../types/DescribeVpcsExceptionsUnion";

export class DescribeVpcsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcsInput,
      OutputTypesUnion,
      DescribeVpcsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpcs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcsInput,
    DescribeVpcsOutput,
    Blob
  >();

  constructor(readonly input: DescribeVpcsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeVpcsInput, DescribeVpcsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpcsInput, DescribeVpcsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
