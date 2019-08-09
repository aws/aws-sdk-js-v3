import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAssociationForServiceQuotaTemplate } from "../model/GetAssociationForServiceQuotaTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAssociationForServiceQuotaTemplateInput } from "../types/GetAssociationForServiceQuotaTemplateInput";
import { GetAssociationForServiceQuotaTemplateOutput } from "../types/GetAssociationForServiceQuotaTemplateOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/GetAssociationForServiceQuotaTemplateInput";
export * from "../types/GetAssociationForServiceQuotaTemplateOutput";
export * from "../types/GetAssociationForServiceQuotaTemplateExceptionsUnion";

export class GetAssociationForServiceQuotaTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAssociationForServiceQuotaTemplateInput,
      OutputTypesUnion,
      GetAssociationForServiceQuotaTemplateOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAssociationForServiceQuotaTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAssociationForServiceQuotaTemplateInput,
    GetAssociationForServiceQuotaTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAssociationForServiceQuotaTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAssociationForServiceQuotaTemplateInput,
    GetAssociationForServiceQuotaTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAssociationForServiceQuotaTemplateInput,
        GetAssociationForServiceQuotaTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
