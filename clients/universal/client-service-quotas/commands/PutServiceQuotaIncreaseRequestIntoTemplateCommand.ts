import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutServiceQuotaIncreaseRequestIntoTemplate } from "../model/PutServiceQuotaIncreaseRequestIntoTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutServiceQuotaIncreaseRequestIntoTemplateInput } from "../types/PutServiceQuotaIncreaseRequestIntoTemplateInput";
import { PutServiceQuotaIncreaseRequestIntoTemplateOutput } from "../types/PutServiceQuotaIncreaseRequestIntoTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/PutServiceQuotaIncreaseRequestIntoTemplateInput";
export * from "../types/PutServiceQuotaIncreaseRequestIntoTemplateOutput";
export * from "../types/PutServiceQuotaIncreaseRequestIntoTemplateExceptionsUnion";

export class PutServiceQuotaIncreaseRequestIntoTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutServiceQuotaIncreaseRequestIntoTemplateInput,
      OutputTypesUnion,
      PutServiceQuotaIncreaseRequestIntoTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutServiceQuotaIncreaseRequestIntoTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutServiceQuotaIncreaseRequestIntoTemplateInput,
    PutServiceQuotaIncreaseRequestIntoTemplateOutput,
    Uint8Array
  >();

  constructor(
    readonly input: PutServiceQuotaIncreaseRequestIntoTemplateInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutServiceQuotaIncreaseRequestIntoTemplateInput,
    PutServiceQuotaIncreaseRequestIntoTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutServiceQuotaIncreaseRequestIntoTemplateInput,
        PutServiceQuotaIncreaseRequestIntoTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
