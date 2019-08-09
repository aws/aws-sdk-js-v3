import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSystemTemplate } from "../model/CreateSystemTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSystemTemplateInput } from "../types/CreateSystemTemplateInput";
import { CreateSystemTemplateOutput } from "../types/CreateSystemTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/CreateSystemTemplateInput";
export * from "../types/CreateSystemTemplateOutput";
export * from "../types/CreateSystemTemplateExceptionsUnion";

export class CreateSystemTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSystemTemplateInput,
      OutputTypesUnion,
      CreateSystemTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSystemTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSystemTemplateInput,
    CreateSystemTemplateOutput,
    Blob
  >();

  constructor(readonly input: CreateSystemTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSystemTemplateInput,
    CreateSystemTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSystemTemplateInput, CreateSystemTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
