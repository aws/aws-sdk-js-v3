import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCommit } from "../model/CreateCommit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCommitInput } from "../types/CreateCommitInput";
import { CreateCommitOutput } from "../types/CreateCommitOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/CreateCommitInput";
export * from "../types/CreateCommitOutput";
export * from "../types/CreateCommitExceptionsUnion";

export class CreateCommitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCommitInput,
      OutputTypesUnion,
      CreateCommitOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCommit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCommitInput,
    CreateCommitOutput,
    Blob
  >();

  constructor(readonly input: CreateCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCommitInput, CreateCommitOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCommitInput, CreateCommitOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
