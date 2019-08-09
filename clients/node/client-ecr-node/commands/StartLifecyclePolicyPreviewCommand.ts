import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartLifecyclePolicyPreview } from "../model/StartLifecyclePolicyPreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartLifecyclePolicyPreviewInput } from "../types/StartLifecyclePolicyPreviewInput";
import { StartLifecyclePolicyPreviewOutput } from "../types/StartLifecyclePolicyPreviewOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/StartLifecyclePolicyPreviewInput";
export * from "../types/StartLifecyclePolicyPreviewOutput";
export * from "../types/StartLifecyclePolicyPreviewExceptionsUnion";

export class StartLifecyclePolicyPreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartLifecyclePolicyPreviewInput,
      OutputTypesUnion,
      StartLifecyclePolicyPreviewOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartLifecyclePolicyPreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartLifecyclePolicyPreviewInput,
    StartLifecyclePolicyPreviewOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartLifecyclePolicyPreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartLifecyclePolicyPreviewInput,
    StartLifecyclePolicyPreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartLifecyclePolicyPreviewInput,
        StartLifecyclePolicyPreviewOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
