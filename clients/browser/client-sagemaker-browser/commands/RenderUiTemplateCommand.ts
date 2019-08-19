import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Blob
    > {
  readonly model = RenderUiTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RenderUiTemplateInput,
    RenderUiTemplateOutput,
    Blob
  >();

  constructor(readonly input: RenderUiTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
