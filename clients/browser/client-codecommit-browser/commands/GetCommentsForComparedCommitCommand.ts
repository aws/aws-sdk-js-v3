import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCommentsForComparedCommit } from "../model/GetCommentsForComparedCommit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCommentsForComparedCommitInput } from "../types/GetCommentsForComparedCommitInput";
import { GetCommentsForComparedCommitOutput } from "../types/GetCommentsForComparedCommitOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetCommentsForComparedCommitInput";
export * from "../types/GetCommentsForComparedCommitOutput";
export * from "../types/GetCommentsForComparedCommitExceptionsUnion";

export class GetCommentsForComparedCommitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCommentsForComparedCommitInput,
      OutputTypesUnion,
      GetCommentsForComparedCommitOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = GetCommentsForComparedCommit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCommentsForComparedCommitInput,
    GetCommentsForComparedCommitOutput,
    Blob
  >();

  constructor(readonly input: GetCommentsForComparedCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCommentsForComparedCommitInput,
    GetCommentsForComparedCommitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCommentsForComparedCommitInput,
        GetCommentsForComparedCommitOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
