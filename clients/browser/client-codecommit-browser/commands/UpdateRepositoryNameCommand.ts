import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRepositoryName } from "../model/UpdateRepositoryName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRepositoryNameInput } from "../types/UpdateRepositoryNameInput";
import { UpdateRepositoryNameOutput } from "../types/UpdateRepositoryNameOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdateRepositoryNameInput";
export * from "../types/UpdateRepositoryNameOutput";
export * from "../types/UpdateRepositoryNameExceptionsUnion";

export class UpdateRepositoryNameCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRepositoryNameInput,
      OutputTypesUnion,
      UpdateRepositoryNameOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRepositoryName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRepositoryNameInput,
    UpdateRepositoryNameOutput,
    Blob
  >();

  constructor(readonly input: UpdateRepositoryNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRepositoryNameInput,
    UpdateRepositoryNameOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
