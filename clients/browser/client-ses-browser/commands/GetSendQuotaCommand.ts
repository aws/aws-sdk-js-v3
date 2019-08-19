import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSendQuota } from "../model/operations/GetSendQuota";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSendQuotaInput } from "../types/GetSendQuotaInput";
import { GetSendQuotaOutput } from "../types/GetSendQuotaOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetSendQuotaInput";
export * from "../types/GetSendQuotaOutput";
export * from "../types/GetSendQuotaExceptionsUnion";

export class GetSendQuotaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSendQuotaInput,
      OutputTypesUnion,
      GetSendQuotaOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = GetSendQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSendQuotaInput,
    GetSendQuotaOutput,
    Blob
  >();

  constructor(readonly input: GetSendQuotaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSendQuotaInput, GetSendQuotaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSendQuotaInput, GetSendQuotaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
