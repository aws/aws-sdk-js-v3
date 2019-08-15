import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeprecateFlowTemplate } from "../model/operations/DeprecateFlowTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateFlowTemplateInput } from "../types/DeprecateFlowTemplateInput";
import { DeprecateFlowTemplateOutput } from "../types/DeprecateFlowTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeprecateFlowTemplateInput";
export * from "../types/DeprecateFlowTemplateOutput";
export * from "../types/DeprecateFlowTemplateExceptionsUnion";

export class DeprecateFlowTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateFlowTemplateInput,
      OutputTypesUnion,
      DeprecateFlowTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeprecateFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateFlowTemplateInput,
    DeprecateFlowTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeprecateFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprecateFlowTemplateInput,
    DeprecateFlowTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateFlowTemplateInput, DeprecateFlowTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
