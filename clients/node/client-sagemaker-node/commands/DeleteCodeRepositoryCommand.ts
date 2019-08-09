import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCodeRepository } from "../model/DeleteCodeRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCodeRepositoryInput } from "../types/DeleteCodeRepositoryInput";
import { DeleteCodeRepositoryOutput } from "../types/DeleteCodeRepositoryOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteCodeRepositoryInput";
export * from "../types/DeleteCodeRepositoryOutput";
export * from "../types/DeleteCodeRepositoryExceptionsUnion";

export class DeleteCodeRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCodeRepositoryInput,
      OutputTypesUnion,
      DeleteCodeRepositoryOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCodeRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCodeRepositoryInput,
    DeleteCodeRepositoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCodeRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCodeRepositoryInput,
    DeleteCodeRepositoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCodeRepositoryInput, DeleteCodeRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
