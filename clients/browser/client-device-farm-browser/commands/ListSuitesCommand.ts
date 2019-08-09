import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSuites } from "../model/ListSuites";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSuitesInput } from "../types/ListSuitesInput";
import { ListSuitesOutput } from "../types/ListSuitesOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListSuitesInput";
export * from "../types/ListSuitesOutput";
export * from "../types/ListSuitesExceptionsUnion";

export class ListSuitesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSuitesInput,
      OutputTypesUnion,
      ListSuitesOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListSuites;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSuitesInput,
    ListSuitesOutput,
    Blob
  >();

  constructor(readonly input: ListSuitesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSuitesInput, ListSuitesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSuitesInput, ListSuitesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
