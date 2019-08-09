import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFlowTemplateRevisions } from "../model/GetFlowTemplateRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFlowTemplateRevisionsInput } from "../types/GetFlowTemplateRevisionsInput";
import { GetFlowTemplateRevisionsOutput } from "../types/GetFlowTemplateRevisionsOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetFlowTemplateRevisionsInput";
export * from "../types/GetFlowTemplateRevisionsOutput";
export * from "../types/GetFlowTemplateRevisionsExceptionsUnion";

export class GetFlowTemplateRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFlowTemplateRevisionsInput,
      OutputTypesUnion,
      GetFlowTemplateRevisionsOutput,
      IoTThingsGraphResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetFlowTemplateRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFlowTemplateRevisionsInput,
    GetFlowTemplateRevisionsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetFlowTemplateRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFlowTemplateRevisionsInput,
    GetFlowTemplateRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFlowTemplateRevisionsInput, GetFlowTemplateRevisionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
