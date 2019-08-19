import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GenerateTemplate } from "../model/operations/GenerateTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateTemplateInput } from "../types/GenerateTemplateInput";
import { GenerateTemplateOutput } from "../types/GenerateTemplateOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GenerateTemplateInput";
export * from "../types/GenerateTemplateOutput";
export * from "../types/GenerateTemplateExceptionsUnion";

export class GenerateTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateTemplateInput,
      OutputTypesUnion,
      GenerateTemplateOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = GenerateTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateTemplateInput,
    GenerateTemplateOutput,
    Blob
  >();

  constructor(readonly input: GenerateTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GenerateTemplateInput, GenerateTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateTemplateInput, GenerateTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
