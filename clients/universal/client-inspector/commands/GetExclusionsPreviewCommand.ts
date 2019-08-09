import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetExclusionsPreview } from "../model/GetExclusionsPreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExclusionsPreviewInput } from "../types/GetExclusionsPreviewInput";
import { GetExclusionsPreviewOutput } from "../types/GetExclusionsPreviewOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/GetExclusionsPreviewInput";
export * from "../types/GetExclusionsPreviewOutput";
export * from "../types/GetExclusionsPreviewExceptionsUnion";

export class GetExclusionsPreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExclusionsPreviewInput,
      OutputTypesUnion,
      GetExclusionsPreviewOutput,
      InspectorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetExclusionsPreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExclusionsPreviewInput,
    GetExclusionsPreviewOutput,
    Uint8Array
  >();

  constructor(readonly input: GetExclusionsPreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetExclusionsPreviewInput,
    GetExclusionsPreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetExclusionsPreviewInput, GetExclusionsPreviewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
