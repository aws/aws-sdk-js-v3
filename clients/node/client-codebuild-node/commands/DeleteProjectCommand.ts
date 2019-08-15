import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteProject } from "../model/operations/DeleteProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProjectInput } from "../types/DeleteProjectInput";
import { DeleteProjectOutput } from "../types/DeleteProjectOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/DeleteProjectInput";
export * from "../types/DeleteProjectOutput";
export * from "../types/DeleteProjectExceptionsUnion";

export class DeleteProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProjectInput,
      OutputTypesUnion,
      DeleteProjectOutput,
      CodeBuildResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProjectInput,
    DeleteProjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteProjectInput, DeleteProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteProjectInput, DeleteProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
