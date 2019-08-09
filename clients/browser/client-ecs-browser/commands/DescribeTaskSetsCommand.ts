import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTaskSets } from "../model/DescribeTaskSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTaskSetsInput } from "../types/DescribeTaskSetsInput";
import { DescribeTaskSetsOutput } from "../types/DescribeTaskSetsOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeTaskSetsInput";
export * from "../types/DescribeTaskSetsOutput";
export * from "../types/DescribeTaskSetsExceptionsUnion";

export class DescribeTaskSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTaskSetsInput,
      OutputTypesUnion,
      DescribeTaskSetsOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTaskSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTaskSetsInput,
    DescribeTaskSetsOutput,
    Blob
  >();

  constructor(readonly input: DescribeTaskSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTaskSetsInput, DescribeTaskSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTaskSetsInput, DescribeTaskSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
