import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrainingJob } from "../model/CreateTrainingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrainingJobInput } from "../types/CreateTrainingJobInput";
import { CreateTrainingJobOutput } from "../types/CreateTrainingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateTrainingJobInput";
export * from "../types/CreateTrainingJobOutput";
export * from "../types/CreateTrainingJobExceptionsUnion";

export class CreateTrainingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrainingJobInput,
      OutputTypesUnion,
      CreateTrainingJobOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTrainingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrainingJobInput,
    CreateTrainingJobOutput,
    Blob
  >();

  constructor(readonly input: CreateTrainingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTrainingJobInput, CreateTrainingJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrainingJobInput, CreateTrainingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
