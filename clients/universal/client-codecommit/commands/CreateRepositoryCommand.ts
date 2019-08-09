import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRepository } from "../model/CreateRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRepositoryInput } from "../types/CreateRepositoryInput";
import { CreateRepositoryOutput } from "../types/CreateRepositoryOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/CreateRepositoryInput";
export * from "../types/CreateRepositoryOutput";
export * from "../types/CreateRepositoryExceptionsUnion";

export class CreateRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRepositoryInput,
      OutputTypesUnion,
      CreateRepositoryOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRepositoryInput,
    CreateRepositoryOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRepositoryInput, CreateRepositoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRepositoryInput, CreateRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
