import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSolution } from "../model/operations/DescribeSolution";
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
      _stream.Readable
    > {
  readonly model = DescribeSolution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSolutionInput,
    DescribeSolutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSolutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
