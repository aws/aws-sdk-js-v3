import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateExclusionsPreview } from "../model/operations/CreateExclusionsPreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateExclusionsPreviewInput } from "../types/CreateExclusionsPreviewInput";
import { CreateExclusionsPreviewOutput } from "../types/CreateExclusionsPreviewOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/CreateExclusionsPreviewInput";
export * from "../types/CreateExclusionsPreviewOutput";
export * from "../types/CreateExclusionsPreviewExceptionsUnion";

export class CreateExclusionsPreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateExclusionsPreviewInput,
      OutputTypesUnion,
      CreateExclusionsPreviewOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateExclusionsPreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateExclusionsPreviewInput,
    CreateExclusionsPreviewOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateExclusionsPreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateExclusionsPreviewInput,
    CreateExclusionsPreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateExclusionsPreviewInput, CreateExclusionsPreviewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
