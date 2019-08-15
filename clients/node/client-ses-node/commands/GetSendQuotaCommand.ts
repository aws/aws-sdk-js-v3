import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = GetSendQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSendQuotaInput,
    GetSendQuotaOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSendQuotaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
