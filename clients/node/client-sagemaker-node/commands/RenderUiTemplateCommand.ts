import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RenderUiTemplate } from "../model/operations/RenderUiTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RenderUiTemplateInput } from "../types/RenderUiTemplateInput";
import { RenderUiTemplateOutput } from "../types/RenderUiTemplateOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/RenderUiTemplateInput";
export * from "../types/RenderUiTemplateOutput";
export * from "../types/RenderUiTemplateExceptionsUnion";

export class RenderUiTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RenderUiTemplateInput,
      OutputTypesUnion,
      RenderUiTemplateOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RenderUiTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RenderUiTemplateInput,
    RenderUiTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: RenderUiTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<RenderUiTemplateInput, RenderUiTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RenderUiTemplateInput, RenderUiTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
