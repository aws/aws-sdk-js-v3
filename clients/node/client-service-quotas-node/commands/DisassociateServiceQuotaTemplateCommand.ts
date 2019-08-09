import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateServiceQuotaTemplate } from "../model/DisassociateServiceQuotaTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateServiceQuotaTemplateInput } from "../types/DisassociateServiceQuotaTemplateInput";
import { DisassociateServiceQuotaTemplateOutput } from "../types/DisassociateServiceQuotaTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/DisassociateServiceQuotaTemplateInput";
export * from "../types/DisassociateServiceQuotaTemplateOutput";
export * from "../types/DisassociateServiceQuotaTemplateExceptionsUnion";

export class DisassociateServiceQuotaTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateServiceQuotaTemplateInput,
      OutputTypesUnion,
      DisassociateServiceQuotaTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateServiceQuotaTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateServiceQuotaTemplateInput,
    DisassociateServiceQuotaTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateServiceQuotaTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateServiceQuotaTemplateInput,
    DisassociateServiceQuotaTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateServiceQuotaTemplateInput,
        DisassociateServiceQuotaTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
