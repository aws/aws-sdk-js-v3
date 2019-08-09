import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRepositoryDescription } from "../model/UpdateRepositoryDescription";
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
      Uint8Array
    > {
  readonly model = UpdateRepositoryDescription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRepositoryDescriptionInput,
    UpdateRepositoryDescriptionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRepositoryDescriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
