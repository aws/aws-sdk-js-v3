import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeGlobalTable } from "../model/DescribeGlobalTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGlobalTableInput } from "../types/DescribeGlobalTableInput";
import { DescribeGlobalTableOutput } from "../types/DescribeGlobalTableOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/DescribeGlobalTableInput";
export * from "../types/DescribeGlobalTableOutput";
export * from "../types/DescribeGlobalTableExceptionsUnion";

export class DescribeGlobalTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGlobalTableInput,
      OutputTypesUnion,
      DescribeGlobalTableOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGlobalTableInput,
    DescribeGlobalTableOutput,
    Blob
  >();

  constructor(readonly input: DescribeGlobalTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGlobalTableInput,
    DescribeGlobalTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DescribeGlobalTable
    };

    return stack.resolve(
      handler<DescribeGlobalTableInput, DescribeGlobalTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
