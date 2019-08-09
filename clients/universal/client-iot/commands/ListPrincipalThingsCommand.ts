import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPrincipalThings } from "../model/ListPrincipalThings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPrincipalThingsInput } from "../types/ListPrincipalThingsInput";
import { ListPrincipalThingsOutput } from "../types/ListPrincipalThingsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListPrincipalThingsInput";
export * from "../types/ListPrincipalThingsOutput";
export * from "../types/ListPrincipalThingsExceptionsUnion";

export class ListPrincipalThingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPrincipalThingsInput,
      OutputTypesUnion,
      ListPrincipalThingsOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListPrincipalThings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPrincipalThingsInput,
    ListPrincipalThingsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPrincipalThingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPrincipalThingsInput,
    ListPrincipalThingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPrincipalThingsInput, ListPrincipalThingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
