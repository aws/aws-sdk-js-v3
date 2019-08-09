import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFlowTemplate } from "../model/CreateFlowTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFlowTemplateInput } from "../types/CreateFlowTemplateInput";
import { CreateFlowTemplateOutput } from "../types/CreateFlowTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/CreateFlowTemplateInput";
export * from "../types/CreateFlowTemplateOutput";
export * from "../types/CreateFlowTemplateExceptionsUnion";

export class CreateFlowTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFlowTemplateInput,
      OutputTypesUnion,
      CreateFlowTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = CreateFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFlowTemplateInput,
    CreateFlowTemplateOutput,
    Blob
  >();

  constructor(readonly input: CreateFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFlowTemplateInput,
    CreateFlowTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFlowTemplateInput, CreateFlowTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
