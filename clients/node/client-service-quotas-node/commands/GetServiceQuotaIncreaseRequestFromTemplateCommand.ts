import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetServiceQuotaIncreaseRequestFromTemplate } from "../model/GetServiceQuotaIncreaseRequestFromTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceQuotaIncreaseRequestFromTemplateInput } from "../types/GetServiceQuotaIncreaseRequestFromTemplateInput";
import { GetServiceQuotaIncreaseRequestFromTemplateOutput } from "../types/GetServiceQuotaIncreaseRequestFromTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/GetServiceQuotaIncreaseRequestFromTemplateInput";
export * from "../types/GetServiceQuotaIncreaseRequestFromTemplateOutput";
export * from "../types/GetServiceQuotaIncreaseRequestFromTemplateExceptionsUnion";

export class GetServiceQuotaIncreaseRequestFromTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceQuotaIncreaseRequestFromTemplateInput,
      OutputTypesUnion,
      GetServiceQuotaIncreaseRequestFromTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetServiceQuotaIncreaseRequestFromTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceQuotaIncreaseRequestFromTemplateInput,
    GetServiceQuotaIncreaseRequestFromTemplateOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: GetServiceQuotaIncreaseRequestFromTemplateInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceQuotaIncreaseRequestFromTemplateInput,
    GetServiceQuotaIncreaseRequestFromTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetServiceQuotaIncreaseRequestFromTemplateInput,
        GetServiceQuotaIncreaseRequestFromTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
