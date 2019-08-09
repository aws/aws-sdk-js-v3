import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateServiceQuotaTemplate } from "../model/AssociateServiceQuotaTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateServiceQuotaTemplateInput } from "../types/AssociateServiceQuotaTemplateInput";
import { AssociateServiceQuotaTemplateOutput } from "../types/AssociateServiceQuotaTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/AssociateServiceQuotaTemplateInput";
export * from "../types/AssociateServiceQuotaTemplateOutput";
export * from "../types/AssociateServiceQuotaTemplateExceptionsUnion";

export class AssociateServiceQuotaTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateServiceQuotaTemplateInput,
      OutputTypesUnion,
      AssociateServiceQuotaTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateServiceQuotaTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateServiceQuotaTemplateInput,
    AssociateServiceQuotaTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateServiceQuotaTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateServiceQuotaTemplateInput,
    AssociateServiceQuotaTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateServiceQuotaTemplateInput,
        AssociateServiceQuotaTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
