import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCustomVerificationEmailTemplate } from "../model/CreateCustomVerificationEmailTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCustomVerificationEmailTemplateInput } from "../types/CreateCustomVerificationEmailTemplateInput";
import { CreateCustomVerificationEmailTemplateOutput } from "../types/CreateCustomVerificationEmailTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateCustomVerificationEmailTemplateInput";
export * from "../types/CreateCustomVerificationEmailTemplateOutput";
export * from "../types/CreateCustomVerificationEmailTemplateExceptionsUnion";

export class CreateCustomVerificationEmailTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCustomVerificationEmailTemplateInput,
      OutputTypesUnion,
      CreateCustomVerificationEmailTemplateOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCustomVerificationEmailTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCustomVerificationEmailTemplateInput,
    CreateCustomVerificationEmailTemplateOutput,
    Blob
  >();

  constructor(readonly input: CreateCustomVerificationEmailTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCustomVerificationEmailTemplateInput,
    CreateCustomVerificationEmailTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCustomVerificationEmailTemplateInput,
        CreateCustomVerificationEmailTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
