import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDefaultBranch } from "../model/UpdateDefaultBranch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDefaultBranchInput } from "../types/UpdateDefaultBranchInput";
import { UpdateDefaultBranchOutput } from "../types/UpdateDefaultBranchOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdateDefaultBranchInput";
export * from "../types/UpdateDefaultBranchOutput";
export * from "../types/UpdateDefaultBranchExceptionsUnion";

export class UpdateDefaultBranchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDefaultBranchInput,
      OutputTypesUnion,
      UpdateDefaultBranchOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDefaultBranch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDefaultBranchInput,
    UpdateDefaultBranchOutput,
    Blob
  >();

  constructor(readonly input: UpdateDefaultBranchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDefaultBranchInput,
    UpdateDefaultBranchOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDefaultBranchInput, UpdateDefaultBranchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
