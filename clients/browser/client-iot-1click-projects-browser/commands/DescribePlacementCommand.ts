import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePlacement } from "../model/DescribePlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePlacementInput } from "../types/DescribePlacementInput";
import { DescribePlacementOutput } from "../types/DescribePlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/DescribePlacementInput";
export * from "../types/DescribePlacementOutput";
export * from "../types/DescribePlacementExceptionsUnion";

export class DescribePlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePlacementInput,
      OutputTypesUnion,
      DescribePlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePlacementInput,
    DescribePlacementOutput,
    Blob
  >();

  constructor(readonly input: DescribePlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePlacementInput, DescribePlacementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePlacementInput, DescribePlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
