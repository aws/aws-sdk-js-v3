import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateExclusionsPreview } from "../model/CreateExclusionsPreview";
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
      Blob
    > {
  readonly model = CreateExclusionsPreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateExclusionsPreviewInput,
    CreateExclusionsPreviewOutput,
    Blob
  >();

  constructor(readonly input: CreateExclusionsPreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
