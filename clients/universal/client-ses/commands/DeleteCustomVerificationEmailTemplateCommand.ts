import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCustomVerificationEmailTemplate } from "../model/DeleteCustomVerificationEmailTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCustomVerificationEmailTemplateInput } from "../types/DeleteCustomVerificationEmailTemplateInput";
import { DeleteCustomVerificationEmailTemplateOutput } from "../types/DeleteCustomVerificationEmailTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteCustomVerificationEmailTemplateInput";
export * from "../types/DeleteCustomVerificationEmailTemplateOutput";
export * from "../types/DeleteCustomVerificationEmailTemplateExceptionsUnion";

export class DeleteCustomVerificationEmailTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCustomVerificationEmailTemplateInput,
      OutputTypesUnion,
      DeleteCustomVerificationEmailTemplateOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteCustomVerificationEmailTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCustomVerificationEmailTemplateInput,
    DeleteCustomVerificationEmailTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteCustomVerificationEmailTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCustomVerificationEmailTemplateInput,
    DeleteCustomVerificationEmailTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteCustomVerificationEmailTemplateInput,
        DeleteCustomVerificationEmailTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
