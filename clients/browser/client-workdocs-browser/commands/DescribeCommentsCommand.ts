import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeComments } from "../model/operations/DescribeComments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCommentsInput } from "../types/DescribeCommentsInput";
import { DescribeCommentsOutput } from "../types/DescribeCommentsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeCommentsInput";
export * from "../types/DescribeCommentsOutput";
export * from "../types/DescribeCommentsExceptionsUnion";

export class DescribeCommentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCommentsInput,
      OutputTypesUnion,
      DescribeCommentsOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeComments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCommentsInput,
    DescribeCommentsOutput,
    Blob
  >();

  constructor(readonly input: DescribeCommentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeCommentsInput, DescribeCommentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCommentsInput, DescribeCommentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
