import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRequestedServiceQuotaChange } from "../model/operations/GetRequestedServiceQuotaChange";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRequestedServiceQuotaChangeInput } from "../types/GetRequestedServiceQuotaChangeInput";
import { GetRequestedServiceQuotaChangeOutput } from "../types/GetRequestedServiceQuotaChangeOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/GetRequestedServiceQuotaChangeInput";
export * from "../types/GetRequestedServiceQuotaChangeOutput";
export * from "../types/GetRequestedServiceQuotaChangeExceptionsUnion";

export class GetRequestedServiceQuotaChangeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRequestedServiceQuotaChangeInput,
      OutputTypesUnion,
      GetRequestedServiceQuotaChangeOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = GetRequestedServiceQuotaChange;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRequestedServiceQuotaChangeInput,
    GetRequestedServiceQuotaChangeOutput,
    Blob
  >();

  constructor(readonly input: GetRequestedServiceQuotaChangeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRequestedServiceQuotaChangeInput,
    GetRequestedServiceQuotaChangeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRequestedServiceQuotaChangeInput,
        GetRequestedServiceQuotaChangeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
