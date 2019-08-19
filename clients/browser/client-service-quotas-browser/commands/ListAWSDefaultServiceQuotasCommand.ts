import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAWSDefaultServiceQuotas } from "../model/operations/ListAWSDefaultServiceQuotas";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAWSDefaultServiceQuotasInput } from "../types/ListAWSDefaultServiceQuotasInput";
import { ListAWSDefaultServiceQuotasOutput } from "../types/ListAWSDefaultServiceQuotasOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/ListAWSDefaultServiceQuotasInput";
export * from "../types/ListAWSDefaultServiceQuotasOutput";
export * from "../types/ListAWSDefaultServiceQuotasExceptionsUnion";

export class ListAWSDefaultServiceQuotasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAWSDefaultServiceQuotasInput,
      OutputTypesUnion,
      ListAWSDefaultServiceQuotasOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = ListAWSDefaultServiceQuotas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAWSDefaultServiceQuotasInput,
    ListAWSDefaultServiceQuotasOutput,
    Blob
  >();

  constructor(readonly input: ListAWSDefaultServiceQuotasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAWSDefaultServiceQuotasInput,
    ListAWSDefaultServiceQuotasOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAWSDefaultServiceQuotasInput,
        ListAWSDefaultServiceQuotasOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
