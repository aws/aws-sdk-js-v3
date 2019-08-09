import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListNetworks } from "../model/ListNetworks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNetworksInput } from "../types/ListNetworksInput";
import { ListNetworksOutput } from "../types/ListNetworksOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListNetworksInput";
export * from "../types/ListNetworksOutput";
export * from "../types/ListNetworksExceptionsUnion";

export class ListNetworksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNetworksInput,
      OutputTypesUnion,
      ListNetworksOutput,
      ManagedBlockchainResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListNetworks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNetworksInput,
    ListNetworksOutput,
    Uint8Array
  >();

  constructor(readonly input: ListNetworksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListNetworksInput, ListNetworksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNetworksInput, ListNetworksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
