import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLogSubscriptions } from "../model/ListLogSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLogSubscriptionsInput } from "../types/ListLogSubscriptionsInput";
import { ListLogSubscriptionsOutput } from "../types/ListLogSubscriptionsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ListLogSubscriptionsInput";
export * from "../types/ListLogSubscriptionsOutput";
export * from "../types/ListLogSubscriptionsExceptionsUnion";

export class ListLogSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLogSubscriptionsInput,
      OutputTypesUnion,
      ListLogSubscriptionsOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListLogSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLogSubscriptionsInput,
    ListLogSubscriptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLogSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLogSubscriptionsInput,
    ListLogSubscriptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLogSubscriptionsInput, ListLogSubscriptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
