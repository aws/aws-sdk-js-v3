import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLunaClients } from "../model/ListLunaClients";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLunaClientsInput } from "../types/ListLunaClientsInput";
import { ListLunaClientsOutput } from "../types/ListLunaClientsOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ListLunaClientsInput";
export * from "../types/ListLunaClientsOutput";
export * from "../types/ListLunaClientsExceptionsUnion";

export class ListLunaClientsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLunaClientsInput,
      OutputTypesUnion,
      ListLunaClientsOutput,
      CloudHSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLunaClients;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLunaClientsInput,
    ListLunaClientsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLunaClientsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLunaClientsInput, ListLunaClientsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLunaClientsInput, ListLunaClientsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
