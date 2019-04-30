import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBranch } from "../model/CreateBranch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBranchInput } from "../types/CreateBranchInput";
import { CreateBranchOutput } from "../types/CreateBranchOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/CreateBranchInput";
export * from "../types/CreateBranchOutput";
export * from "../types/CreateBranchExceptionsUnion";

export class CreateBranchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBranchInput,
      OutputTypesUnion,
      CreateBranchOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBranchInput,
    CreateBranchOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBranchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBranchInput, CreateBranchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: CreateBranch
    };

    return stack.resolve(
      handler<CreateBranchInput, CreateBranchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
