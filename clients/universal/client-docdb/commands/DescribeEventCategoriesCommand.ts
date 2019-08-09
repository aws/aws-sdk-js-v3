import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventCategories } from "../model/DescribeEventCategories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventCategoriesInput } from "../types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "../types/DescribeEventCategoriesOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribeEventCategoriesInput";
export * from "../types/DescribeEventCategoriesOutput";
export * from "../types/DescribeEventCategoriesExceptionsUnion";

export class DescribeEventCategoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventCategoriesInput,
      OutputTypesUnion,
      DescribeEventCategoriesOutput,
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEventCategories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventCategoriesInput,
    DescribeEventCategoriesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEventCategoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventCategoriesInput,
    DescribeEventCategoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventCategoriesInput, DescribeEventCategoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
