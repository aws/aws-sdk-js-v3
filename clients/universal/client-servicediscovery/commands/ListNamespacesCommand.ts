import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListNamespaces } from "../model/ListNamespaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNamespacesInput } from "../types/ListNamespacesInput";
import { ListNamespacesOutput } from "../types/ListNamespacesOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/ListNamespacesInput";
export * from "../types/ListNamespacesOutput";
export * from "../types/ListNamespacesExceptionsUnion";

export class ListNamespacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNamespacesInput,
      OutputTypesUnion,
      ListNamespacesOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListNamespaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNamespacesInput,
    ListNamespacesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListNamespacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListNamespacesInput, ListNamespacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNamespacesInput, ListNamespacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
