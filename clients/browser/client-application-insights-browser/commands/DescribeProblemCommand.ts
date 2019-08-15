import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProblem } from "../model/operations/DescribeProblem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProblemInput } from "../types/DescribeProblemInput";
import { DescribeProblemOutput } from "../types/DescribeProblemOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeProblemInput";
export * from "../types/DescribeProblemOutput";
export * from "../types/DescribeProblemExceptionsUnion";

export class DescribeProblemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProblemInput,
      OutputTypesUnion,
      DescribeProblemOutput,
      ApplicationInsightsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProblem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProblemInput,
    DescribeProblemOutput,
    Blob
  >();

  constructor(readonly input: DescribeProblemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeProblemInput, DescribeProblemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProblemInput, DescribeProblemOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
