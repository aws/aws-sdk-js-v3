import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLifecyclePolicyPreview } from "../model/GetLifecyclePolicyPreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLifecyclePolicyPreviewInput } from "../types/GetLifecyclePolicyPreviewInput";
import { GetLifecyclePolicyPreviewOutput } from "../types/GetLifecyclePolicyPreviewOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/GetLifecyclePolicyPreviewInput";
export * from "../types/GetLifecyclePolicyPreviewOutput";
export * from "../types/GetLifecyclePolicyPreviewExceptionsUnion";

export class GetLifecyclePolicyPreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLifecyclePolicyPreviewInput,
      OutputTypesUnion,
      GetLifecyclePolicyPreviewOutput,
      ECRResolvedConfiguration,
      Blob
    > {
  readonly model = GetLifecyclePolicyPreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLifecyclePolicyPreviewInput,
    GetLifecyclePolicyPreviewOutput,
    Blob
  >();

  constructor(readonly input: GetLifecyclePolicyPreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLifecyclePolicyPreviewInput,
    GetLifecyclePolicyPreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLifecyclePolicyPreviewInput, GetLifecyclePolicyPreviewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
