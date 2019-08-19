import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRepository } from "../model/operations/DeleteRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRepositoryInput } from "../types/DeleteRepositoryInput";
import { DeleteRepositoryOutput } from "../types/DeleteRepositoryOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DeleteRepositoryInput";
export * from "../types/DeleteRepositoryOutput";
export * from "../types/DeleteRepositoryExceptionsUnion";

export class DeleteRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRepositoryInput,
      OutputTypesUnion,
      DeleteRepositoryOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRepositoryInput,
    DeleteRepositoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRepositoryInput, DeleteRepositoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRepositoryInput, DeleteRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
