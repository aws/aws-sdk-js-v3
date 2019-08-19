import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRecipe } from "../model/operations/DescribeRecipe";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRecipeInput } from "../types/DescribeRecipeInput";
import { DescribeRecipeOutput } from "../types/DescribeRecipeOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeRecipeInput";
export * from "../types/DescribeRecipeOutput";
export * from "../types/DescribeRecipeExceptionsUnion";

export class DescribeRecipeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRecipeInput,
      OutputTypesUnion,
      DescribeRecipeOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRecipe;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRecipeInput,
    DescribeRecipeOutput,
    Blob
  >();

  constructor(readonly input: DescribeRecipeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRecipeInput, DescribeRecipeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRecipeInput, DescribeRecipeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
