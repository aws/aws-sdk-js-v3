import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyWorkspaceImage } from "../model/operations/CopyWorkspaceImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyWorkspaceImageInput } from "../types/CopyWorkspaceImageInput";
import { CopyWorkspaceImageOutput } from "../types/CopyWorkspaceImageOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/CopyWorkspaceImageInput";
export * from "../types/CopyWorkspaceImageOutput";
export * from "../types/CopyWorkspaceImageExceptionsUnion";

export class CopyWorkspaceImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyWorkspaceImageInput,
      OutputTypesUnion,
      CopyWorkspaceImageOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyWorkspaceImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyWorkspaceImageInput,
    CopyWorkspaceImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyWorkspaceImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyWorkspaceImageInput,
    CopyWorkspaceImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyWorkspaceImageInput, CopyWorkspaceImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
