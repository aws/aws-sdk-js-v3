import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportWorkspaceImage } from "../model/ImportWorkspaceImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportWorkspaceImageInput } from "../types/ImportWorkspaceImageInput";
import { ImportWorkspaceImageOutput } from "../types/ImportWorkspaceImageOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ImportWorkspaceImageInput";
export * from "../types/ImportWorkspaceImageOutput";
export * from "../types/ImportWorkspaceImageExceptionsUnion";

export class ImportWorkspaceImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportWorkspaceImageInput,
      OutputTypesUnion,
      ImportWorkspaceImageOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportWorkspaceImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportWorkspaceImageInput,
    ImportWorkspaceImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportWorkspaceImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportWorkspaceImageInput,
    ImportWorkspaceImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportWorkspaceImageInput, ImportWorkspaceImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
