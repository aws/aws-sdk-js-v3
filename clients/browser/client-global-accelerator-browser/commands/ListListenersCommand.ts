import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListListeners } from "../model/operations/ListListeners";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListListenersInput } from "../types/ListListenersInput";
import { ListListenersOutput } from "../types/ListListenersOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/ListListenersInput";
export * from "../types/ListListenersOutput";
export * from "../types/ListListenersExceptionsUnion";

export class ListListenersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListListenersInput,
      OutputTypesUnion,
      ListListenersOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = ListListeners;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListListenersInput,
    ListListenersOutput,
    Blob
  >();

  constructor(readonly input: ListListenersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<ListListenersInput, ListListenersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListListenersInput, ListListenersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
