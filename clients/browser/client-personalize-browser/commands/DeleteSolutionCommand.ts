import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSolution } from "../model/DeleteSolution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSolutionInput } from "../types/DeleteSolutionInput";
import { DeleteSolutionOutput } from "../types/DeleteSolutionOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DeleteSolutionInput";
export * from "../types/DeleteSolutionOutput";
export * from "../types/DeleteSolutionExceptionsUnion";

export class DeleteSolutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSolutionInput,
      OutputTypesUnion,
      DeleteSolutionOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSolution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSolutionInput,
    DeleteSolutionOutput,
    Blob
  >();

  constructor(readonly input: DeleteSolutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSolutionInput, DeleteSolutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSolutionInput, DeleteSolutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
