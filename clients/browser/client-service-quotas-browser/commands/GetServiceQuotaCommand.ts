import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceQuota } from "../model/GetServiceQuota";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceQuotaInput } from "../types/GetServiceQuotaInput";
import { GetServiceQuotaOutput } from "../types/GetServiceQuotaOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/GetServiceQuotaInput";
export * from "../types/GetServiceQuotaOutput";
export * from "../types/GetServiceQuotaExceptionsUnion";

export class GetServiceQuotaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceQuotaInput,
      OutputTypesUnion,
      GetServiceQuotaOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = GetServiceQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceQuotaInput,
    GetServiceQuotaOutput,
    Blob
  >();

  constructor(readonly input: GetServiceQuotaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<GetServiceQuotaInput, GetServiceQuotaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServiceQuotaInput, GetServiceQuotaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
