import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListNodes } from "../model/ListNodes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNodesInput } from "../types/ListNodesInput";
import { ListNodesOutput } from "../types/ListNodesOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListNodesInput";
export * from "../types/ListNodesOutput";
export * from "../types/ListNodesExceptionsUnion";

export class ListNodesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNodesInput,
      OutputTypesUnion,
      ListNodesOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = ListNodes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNodesInput,
    ListNodesOutput,
    Blob
  >();

  constructor(readonly input: ListNodesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListNodesInput, ListNodesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNodesInput, ListNodesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
