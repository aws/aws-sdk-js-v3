import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOpsItems } from "../model/operations/DescribeOpsItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOpsItemsInput } from "../types/DescribeOpsItemsInput";
import { DescribeOpsItemsOutput } from "../types/DescribeOpsItemsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeOpsItemsInput";
export * from "../types/DescribeOpsItemsOutput";
export * from "../types/DescribeOpsItemsExceptionsUnion";

export class DescribeOpsItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOpsItemsInput,
      OutputTypesUnion,
      DescribeOpsItemsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOpsItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOpsItemsInput,
    DescribeOpsItemsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOpsItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeOpsItemsInput, DescribeOpsItemsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOpsItemsInput, DescribeOpsItemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
