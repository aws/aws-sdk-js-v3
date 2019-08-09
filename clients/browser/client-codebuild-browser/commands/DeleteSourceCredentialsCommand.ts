import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSourceCredentials } from "../model/DeleteSourceCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSourceCredentialsInput } from "../types/DeleteSourceCredentialsInput";
import { DeleteSourceCredentialsOutput } from "../types/DeleteSourceCredentialsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/DeleteSourceCredentialsInput";
export * from "../types/DeleteSourceCredentialsOutput";
export * from "../types/DeleteSourceCredentialsExceptionsUnion";

export class DeleteSourceCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSourceCredentialsInput,
      OutputTypesUnion,
      DeleteSourceCredentialsOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSourceCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSourceCredentialsInput,
    DeleteSourceCredentialsOutput,
    Blob
  >();

  constructor(readonly input: DeleteSourceCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSourceCredentialsInput,
    DeleteSourceCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSourceCredentialsInput, DeleteSourceCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
