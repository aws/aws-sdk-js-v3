import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFolder } from "../model/DeleteFolder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFolderInput } from "../types/DeleteFolderInput";
import { DeleteFolderOutput } from "../types/DeleteFolderOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteFolderInput";
export * from "../types/DeleteFolderOutput";
export * from "../types/DeleteFolderExceptionsUnion";

export class DeleteFolderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFolderInput,
      OutputTypesUnion,
      DeleteFolderOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFolder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFolderInput,
    DeleteFolderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFolderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFolderInput, DeleteFolderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFolderInput, DeleteFolderOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
