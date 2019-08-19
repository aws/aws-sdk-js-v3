import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdFormat } from "../model/operations/DescribeIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdFormatInput } from "../types/DescribeIdFormatInput";
import { DescribeIdFormatOutput } from "../types/DescribeIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeIdFormatInput";
export * from "../types/DescribeIdFormatOutput";
export * from "../types/DescribeIdFormatExceptionsUnion";

export class DescribeIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdFormatInput,
      OutputTypesUnion,
      DescribeIdFormatOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdFormatInput,
    DescribeIdFormatOutput,
    Blob
  >();

  constructor(readonly input: DescribeIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeIdFormatInput, DescribeIdFormatOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIdFormatInput, DescribeIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
