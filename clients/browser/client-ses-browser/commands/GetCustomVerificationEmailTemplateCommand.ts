import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCustomVerificationEmailTemplate } from "../model/GetCustomVerificationEmailTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCustomVerificationEmailTemplateInput } from "../types/GetCustomVerificationEmailTemplateInput";
import { GetCustomVerificationEmailTemplateOutput } from "../types/GetCustomVerificationEmailTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetCustomVerificationEmailTemplateInput";
export * from "../types/GetCustomVerificationEmailTemplateOutput";
export * from "../types/GetCustomVerificationEmailTemplateExceptionsUnion";

export class GetCustomVerificationEmailTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCustomVerificationEmailTemplateInput,
      OutputTypesUnion,
      GetCustomVerificationEmailTemplateOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = GetCustomVerificationEmailTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCustomVerificationEmailTemplateInput,
    GetCustomVerificationEmailTemplateOutput,
    Blob
  >();

  constructor(readonly input: GetCustomVerificationEmailTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCustomVerificationEmailTemplateInput,
    GetCustomVerificationEmailTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCustomVerificationEmailTemplateInput,
        GetCustomVerificationEmailTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
