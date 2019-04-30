import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCommit } from "../model/GetCommit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCommitInput } from "../types/GetCommitInput";
import { GetCommitOutput } from "../types/GetCommitOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetCommitInput";
export * from "../types/GetCommitOutput";
export * from "../types/GetCommitExceptionsUnion";

export class GetCommitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCommitInput,
      OutputTypesUnion,
      GetCommitOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCommitInput,
    GetCommitOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCommitInput, GetCommitOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetCommit
    };

    return stack.resolve(
      handler<GetCommitInput, GetCommitOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
