import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProblem } from "../model/DescribeProblem";
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
      Uint8Array
    > {
  readonly model = DescribeProblem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProblemInput,
    DescribeProblemOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeProblemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
