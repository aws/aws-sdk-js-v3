import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSolution } from "../model/CreateSolution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSolutionInput } from "../types/CreateSolutionInput";
import { CreateSolutionOutput } from "../types/CreateSolutionOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateSolutionInput";
export * from "../types/CreateSolutionOutput";
export * from "../types/CreateSolutionExceptionsUnion";

export class CreateSolutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSolutionInput,
      OutputTypesUnion,
      CreateSolutionOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSolution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSolutionInput,
    CreateSolutionOutput,
    Blob
  >();

  constructor(readonly input: CreateSolutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSolutionInput, CreateSolutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSolutionInput, CreateSolutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
