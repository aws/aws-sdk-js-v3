import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceQuotas } from "../model/ListServiceQuotas";
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
      Uint8Array
    > {
  readonly model = ListServiceQuotas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceQuotasInput,
    ListServiceQuotasOutput,
    Uint8Array
  >();

  constructor(readonly input: ListServiceQuotasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
