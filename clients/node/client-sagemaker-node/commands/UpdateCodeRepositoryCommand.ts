import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCodeRepository } from "../model/UpdateCodeRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCodeRepositoryInput } from "../types/UpdateCodeRepositoryInput";
import { UpdateCodeRepositoryOutput } from "../types/UpdateCodeRepositoryOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/UpdateCodeRepositoryInput";
export * from "../types/UpdateCodeRepositoryOutput";
export * from "../types/UpdateCodeRepositoryExceptionsUnion";

export class UpdateCodeRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCodeRepositoryInput,
      OutputTypesUnion,
      UpdateCodeRepositoryOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCodeRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCodeRepositoryInput,
    UpdateCodeRepositoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCodeRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCodeRepositoryInput,
    UpdateCodeRepositoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
