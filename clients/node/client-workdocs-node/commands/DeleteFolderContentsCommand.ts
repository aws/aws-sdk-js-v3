import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFolderContents } from "../model/operations/DeleteFolderContents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFolderContentsInput } from "../types/DeleteFolderContentsInput";
import { DeleteFolderContentsOutput } from "../types/DeleteFolderContentsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteFolderContentsInput";
export * from "../types/DeleteFolderContentsOutput";
export * from "../types/DeleteFolderContentsExceptionsUnion";

export class DeleteFolderContentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFolderContentsInput,
      OutputTypesUnion,
      DeleteFolderContentsOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFolderContents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFolderContentsInput,
    DeleteFolderContentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFolderContentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteFolderContentsInput,
    DeleteFolderContentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFolderContentsInput, DeleteFolderContentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
