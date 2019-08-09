import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBranch } from "../model/DeleteBranch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBranchInput } from "../types/DeleteBranchInput";
import { DeleteBranchOutput } from "../types/DeleteBranchOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DeleteBranchInput";
export * from "../types/DeleteBranchOutput";
export * from "../types/DeleteBranchExceptionsUnion";

export class DeleteBranchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBranchInput,
      OutputTypesUnion,
      DeleteBranchOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteBranch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBranchInput,
    DeleteBranchOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteBranchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBranchInput, DeleteBranchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBranchInput, DeleteBranchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
