import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeprecateFlowTemplate } from "../model/DeprecateFlowTemplate";
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
      Uint8Array
    > {
  readonly model = DeprecateFlowTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateFlowTemplateInput,
    DeprecateFlowTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: DeprecateFlowTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
