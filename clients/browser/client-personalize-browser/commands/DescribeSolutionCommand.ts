import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSolution } from "../model/DescribeSolution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSolutionInput } from "../types/DescribeSolutionInput";
import { DescribeSolutionOutput } from "../types/DescribeSolutionOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeSolutionInput";
export * from "../types/DescribeSolutionOutput";
export * from "../types/DescribeSolutionExceptionsUnion";

export class DescribeSolutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSolutionInput,
      OutputTypesUnion,
      DescribeSolutionOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSolution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSolutionInput,
    DescribeSolutionOutput,
    Blob
  >();

  constructor(readonly input: DescribeSolutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSolutionInput, DescribeSolutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSolutionInput, DescribeSolutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
