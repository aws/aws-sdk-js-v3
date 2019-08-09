import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListClusterOperations } from "../model/ListClusterOperations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListClusterOperationsInput } from "../types/ListClusterOperationsInput";
import { ListClusterOperationsOutput } from "../types/ListClusterOperationsOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/ListClusterOperationsInput";
export * from "../types/ListClusterOperationsOutput";
export * from "../types/ListClusterOperationsExceptionsUnion";

export class ListClusterOperationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListClusterOperationsInput,
      OutputTypesUnion,
      ListClusterOperationsOutput,
      KafkaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListClusterOperations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListClusterOperationsInput,
    ListClusterOperationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListClusterOperationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListClusterOperationsInput,
    ListClusterOperationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListClusterOperationsInput, ListClusterOperationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
