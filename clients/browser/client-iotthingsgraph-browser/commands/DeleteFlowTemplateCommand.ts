import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFlowTemplate } from "../model/DeleteFlowTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFlowTemplateInput } from "../types/DeleteFlowTemplateInput";
import { DeleteFlowTemplateOutput } from "../types/DeleteFlowTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeleteFlowTemplateInput";
export * from "../types/DeleteFlowTemplateOutput";
export * from "../types/DeleteFlowTemplateExceptionsUnion";

export class DeleteFlowTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFlowTemplateInput,
      OutputTypesUnion,
      DeleteFlowTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFlowTemplateInput,
    DeleteFlowTemplateOutput,
    Blob
  >();

  constructor(readonly input: DeleteFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteFlowTemplateInput,
    DeleteFlowTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFlowTemplateInput, DeleteFlowTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
