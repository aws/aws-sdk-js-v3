import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServerNeighbors } from "../model/operations/ListServerNeighbors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServerNeighborsInput } from "../types/ListServerNeighborsInput";
import { ListServerNeighborsOutput } from "../types/ListServerNeighborsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/ListServerNeighborsInput";
export * from "../types/ListServerNeighborsOutput";
export * from "../types/ListServerNeighborsExceptionsUnion";

export class ListServerNeighborsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServerNeighborsInput,
      OutputTypesUnion,
      ListServerNeighborsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListServerNeighbors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServerNeighborsInput,
    ListServerNeighborsOutput,
    Blob
  >();

  constructor(readonly input: ListServerNeighborsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServerNeighborsInput,
    ListServerNeighborsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServerNeighborsInput, ListServerNeighborsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
