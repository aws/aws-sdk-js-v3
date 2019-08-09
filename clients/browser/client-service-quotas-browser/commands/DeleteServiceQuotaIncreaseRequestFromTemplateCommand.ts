import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServiceQuotaIncreaseRequestFromTemplate } from "../model/DeleteServiceQuotaIncreaseRequestFromTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServiceQuotaIncreaseRequestFromTemplateInput } from "../types/DeleteServiceQuotaIncreaseRequestFromTemplateInput";
import { DeleteServiceQuotaIncreaseRequestFromTemplateOutput } from "../types/DeleteServiceQuotaIncreaseRequestFromTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/DeleteServiceQuotaIncreaseRequestFromTemplateInput";
export * from "../types/DeleteServiceQuotaIncreaseRequestFromTemplateOutput";
export * from "../types/DeleteServiceQuotaIncreaseRequestFromTemplateExceptionsUnion";

export class DeleteServiceQuotaIncreaseRequestFromTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServiceQuotaIncreaseRequestFromTemplateInput,
      OutputTypesUnion,
      DeleteServiceQuotaIncreaseRequestFromTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteServiceQuotaIncreaseRequestFromTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServiceQuotaIncreaseRequestFromTemplateInput,
    DeleteServiceQuotaIncreaseRequestFromTemplateOutput,
    Blob
  >();

  constructor(
    readonly input: DeleteServiceQuotaIncreaseRequestFromTemplateInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServiceQuotaIncreaseRequestFromTemplateInput,
    DeleteServiceQuotaIncreaseRequestFromTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteServiceQuotaIncreaseRequestFromTemplateInput,
        DeleteServiceQuotaIncreaseRequestFromTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
