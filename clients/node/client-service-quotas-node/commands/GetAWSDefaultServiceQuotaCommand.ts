import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAWSDefaultServiceQuota } from "../model/operations/GetAWSDefaultServiceQuota";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAWSDefaultServiceQuotaInput } from "../types/GetAWSDefaultServiceQuotaInput";
import { GetAWSDefaultServiceQuotaOutput } from "../types/GetAWSDefaultServiceQuotaOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/GetAWSDefaultServiceQuotaInput";
export * from "../types/GetAWSDefaultServiceQuotaOutput";
export * from "../types/GetAWSDefaultServiceQuotaExceptionsUnion";

export class GetAWSDefaultServiceQuotaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAWSDefaultServiceQuotaInput,
      OutputTypesUnion,
      GetAWSDefaultServiceQuotaOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAWSDefaultServiceQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAWSDefaultServiceQuotaInput,
    GetAWSDefaultServiceQuotaOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAWSDefaultServiceQuotaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAWSDefaultServiceQuotaInput,
    GetAWSDefaultServiceQuotaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAWSDefaultServiceQuotaInput, GetAWSDefaultServiceQuotaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
