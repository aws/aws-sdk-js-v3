import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOperations } from "../model/ListOperations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOperationsInput } from "../types/ListOperationsInput";
import { ListOperationsOutput } from "../types/ListOperationsOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/ListOperationsInput";
export * from "../types/ListOperationsOutput";
export * from "../types/ListOperationsExceptionsUnion";

export class ListOperationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOperationsInput,
      OutputTypesUnion,
      ListOperationsOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListOperations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOperationsInput,
    ListOperationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListOperationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListOperationsInput, ListOperationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOperationsInput, ListOperationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
