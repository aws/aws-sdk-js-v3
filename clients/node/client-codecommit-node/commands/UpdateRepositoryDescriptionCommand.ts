import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRepositoryDescription } from "../model/operations/UpdateRepositoryDescription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRepositoryDescriptionInput } from "../types/UpdateRepositoryDescriptionInput";
import { UpdateRepositoryDescriptionOutput } from "../types/UpdateRepositoryDescriptionOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdateRepositoryDescriptionInput";
export * from "../types/UpdateRepositoryDescriptionOutput";
export * from "../types/UpdateRepositoryDescriptionExceptionsUnion";

export class UpdateRepositoryDescriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRepositoryDescriptionInput,
      OutputTypesUnion,
      UpdateRepositoryDescriptionOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRepositoryDescription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRepositoryDescriptionInput,
    UpdateRepositoryDescriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRepositoryDescriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRepositoryDescriptionInput,
    UpdateRepositoryDescriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateRepositoryDescriptionInput,
        UpdateRepositoryDescriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
