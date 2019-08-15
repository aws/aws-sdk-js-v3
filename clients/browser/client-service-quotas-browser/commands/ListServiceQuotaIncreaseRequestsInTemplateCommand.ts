import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceQuotaIncreaseRequestsInTemplate } from "../model/operations/ListServiceQuotaIncreaseRequestsInTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServiceQuotaIncreaseRequestsInTemplateInput } from "../types/ListServiceQuotaIncreaseRequestsInTemplateInput";
import { ListServiceQuotaIncreaseRequestsInTemplateOutput } from "../types/ListServiceQuotaIncreaseRequestsInTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/ListServiceQuotaIncreaseRequestsInTemplateInput";
export * from "../types/ListServiceQuotaIncreaseRequestsInTemplateOutput";
export * from "../types/ListServiceQuotaIncreaseRequestsInTemplateExceptionsUnion";

export class ListServiceQuotaIncreaseRequestsInTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServiceQuotaIncreaseRequestsInTemplateInput,
      OutputTypesUnion,
      ListServiceQuotaIncreaseRequestsInTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = ListServiceQuotaIncreaseRequestsInTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceQuotaIncreaseRequestsInTemplateInput,
    ListServiceQuotaIncreaseRequestsInTemplateOutput,
    Blob
  >();

  constructor(
    readonly input: ListServiceQuotaIncreaseRequestsInTemplateInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServiceQuotaIncreaseRequestsInTemplateInput,
    ListServiceQuotaIncreaseRequestsInTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListServiceQuotaIncreaseRequestsInTemplateInput,
        ListServiceQuotaIncreaseRequestsInTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
