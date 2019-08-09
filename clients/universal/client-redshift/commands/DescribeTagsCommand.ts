import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTags } from "../model/DescribeTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTagsInput } from "../types/DescribeTagsInput";
import { DescribeTagsOutput } from "../types/DescribeTagsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeTagsInput";
export * from "../types/DescribeTagsOutput";
export * from "../types/DescribeTagsExceptionsUnion";

export class DescribeTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTagsInput,
      OutputTypesUnion,
      DescribeTagsOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTagsInput,
    DescribeTagsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTagsInput, DescribeTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTagsInput, DescribeTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
