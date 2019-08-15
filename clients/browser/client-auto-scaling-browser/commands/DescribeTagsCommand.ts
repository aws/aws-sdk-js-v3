import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTags } from "../model/operations/DescribeTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTagsInput } from "../types/DescribeTagsInput";
import { DescribeTagsOutput } from "../types/DescribeTagsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
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
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTagsInput,
    DescribeTagsOutput,
    Blob
  >();

  constructor(readonly input: DescribeTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
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
