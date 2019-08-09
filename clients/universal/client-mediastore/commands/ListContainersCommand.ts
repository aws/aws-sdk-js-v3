import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListContainers } from "../model/ListContainers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListContainersInput } from "../types/ListContainersInput";
import { ListContainersOutput } from "../types/ListContainersOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/ListContainersInput";
export * from "../types/ListContainersOutput";
export * from "../types/ListContainersExceptionsUnion";

export class ListContainersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListContainersInput,
      OutputTypesUnion,
      ListContainersOutput,
      MediaStoreResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListContainers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListContainersInput,
    ListContainersOutput,
    Uint8Array
  >();

  constructor(readonly input: ListContainersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<ListContainersInput, ListContainersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListContainersInput, ListContainersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
