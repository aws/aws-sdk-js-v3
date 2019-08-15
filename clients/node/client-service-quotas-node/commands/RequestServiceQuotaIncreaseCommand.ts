import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RequestServiceQuotaIncrease } from "../model/operations/RequestServiceQuotaIncrease";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestServiceQuotaIncreaseInput } from "../types/RequestServiceQuotaIncreaseInput";
import { RequestServiceQuotaIncreaseOutput } from "../types/RequestServiceQuotaIncreaseOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/RequestServiceQuotaIncreaseInput";
export * from "../types/RequestServiceQuotaIncreaseOutput";
export * from "../types/RequestServiceQuotaIncreaseExceptionsUnion";

export class RequestServiceQuotaIncreaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestServiceQuotaIncreaseInput,
      OutputTypesUnion,
      RequestServiceQuotaIncreaseOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RequestServiceQuotaIncrease;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestServiceQuotaIncreaseInput,
    RequestServiceQuotaIncreaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: RequestServiceQuotaIncreaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestServiceQuotaIncreaseInput,
    RequestServiceQuotaIncreaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RequestServiceQuotaIncreaseInput,
        RequestServiceQuotaIncreaseOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
