import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFlowTemplate } from "../model/operations/UpdateFlowTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFlowTemplateInput } from "../types/UpdateFlowTemplateInput";
import { UpdateFlowTemplateOutput } from "../types/UpdateFlowTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/UpdateFlowTemplateInput";
export * from "../types/UpdateFlowTemplateOutput";
export * from "../types/UpdateFlowTemplateExceptionsUnion";

export class UpdateFlowTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFlowTemplateInput,
      OutputTypesUnion,
      UpdateFlowTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFlowTemplateInput,
    UpdateFlowTemplateOutput,
    Blob
  >();

  constructor(readonly input: UpdateFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFlowTemplateInput,
    UpdateFlowTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFlowTemplateInput, UpdateFlowTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
