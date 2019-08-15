import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceQuotas } from "../model/operations/ListServiceQuotas";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServiceQuotasInput } from "../types/ListServiceQuotasInput";
import { ListServiceQuotasOutput } from "../types/ListServiceQuotasOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/ListServiceQuotasInput";
export * from "../types/ListServiceQuotasOutput";
export * from "../types/ListServiceQuotasExceptionsUnion";

export class ListServiceQuotasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServiceQuotasInput,
      OutputTypesUnion,
      ListServiceQuotasOutput,
      ServiceQuotasResolvedConfiguration,
      Blob
    > {
  readonly model = ListServiceQuotas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceQuotasInput,
    ListServiceQuotasOutput,
    Blob
  >();

  constructor(readonly input: ListServiceQuotasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<ListServiceQuotasInput, ListServiceQuotasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServiceQuotasInput, ListServiceQuotasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
