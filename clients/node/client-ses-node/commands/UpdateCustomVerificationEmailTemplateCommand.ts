import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCustomVerificationEmailTemplate } from "../model/operations/UpdateCustomVerificationEmailTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCustomVerificationEmailTemplateInput } from "../types/UpdateCustomVerificationEmailTemplateInput";
import { UpdateCustomVerificationEmailTemplateOutput } from "../types/UpdateCustomVerificationEmailTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateCustomVerificationEmailTemplateInput";
export * from "../types/UpdateCustomVerificationEmailTemplateOutput";
export * from "../types/UpdateCustomVerificationEmailTemplateExceptionsUnion";

export class UpdateCustomVerificationEmailTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCustomVerificationEmailTemplateInput,
      OutputTypesUnion,
      UpdateCustomVerificationEmailTemplateOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCustomVerificationEmailTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCustomVerificationEmailTemplateInput,
    UpdateCustomVerificationEmailTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCustomVerificationEmailTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCustomVerificationEmailTemplateInput,
    UpdateCustomVerificationEmailTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateCustomVerificationEmailTemplateInput,
        UpdateCustomVerificationEmailTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
