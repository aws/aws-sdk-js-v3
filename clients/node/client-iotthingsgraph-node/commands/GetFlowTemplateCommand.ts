import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFlowTemplate } from "../model/operations/GetFlowTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFlowTemplateInput } from "../types/GetFlowTemplateInput";
import { GetFlowTemplateOutput } from "../types/GetFlowTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetFlowTemplateInput";
export * from "../types/GetFlowTemplateOutput";
export * from "../types/GetFlowTemplateExceptionsUnion";

export class GetFlowTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFlowTemplateInput,
      OutputTypesUnion,
      GetFlowTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFlowTemplateInput,
    GetFlowTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFlowTemplateInput, GetFlowTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFlowTemplateInput, GetFlowTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
