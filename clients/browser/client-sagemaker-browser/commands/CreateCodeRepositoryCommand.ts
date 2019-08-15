import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCodeRepository } from "../model/operations/CreateCodeRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCodeRepositoryInput } from "../types/CreateCodeRepositoryInput";
import { CreateCodeRepositoryOutput } from "../types/CreateCodeRepositoryOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateCodeRepositoryInput";
export * from "../types/CreateCodeRepositoryOutput";
export * from "../types/CreateCodeRepositoryExceptionsUnion";

export class CreateCodeRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCodeRepositoryInput,
      OutputTypesUnion,
      CreateCodeRepositoryOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCodeRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCodeRepositoryInput,
    CreateCodeRepositoryOutput,
    Blob
  >();

  constructor(readonly input: CreateCodeRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCodeRepositoryInput,
    CreateCodeRepositoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCodeRepositoryInput, CreateCodeRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
