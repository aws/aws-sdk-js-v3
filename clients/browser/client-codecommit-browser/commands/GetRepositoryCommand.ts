import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRepository } from "../model/GetRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRepositoryInput } from "../types/GetRepositoryInput";
import { GetRepositoryOutput } from "../types/GetRepositoryOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetRepositoryInput";
export * from "../types/GetRepositoryOutput";
export * from "../types/GetRepositoryExceptionsUnion";

export class GetRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRepositoryInput,
      OutputTypesUnion,
      GetRepositoryOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = GetRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRepositoryInput,
    GetRepositoryOutput,
    Blob
  >();

  constructor(readonly input: GetRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRepositoryInput, GetRepositoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRepositoryInput, GetRepositoryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
