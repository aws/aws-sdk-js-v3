import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCommit } from "../model/operations/CreateCommit";
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
      _stream.Readable
    > {
  readonly model = CreateCommit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCommitInput,
    CreateCommitOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
