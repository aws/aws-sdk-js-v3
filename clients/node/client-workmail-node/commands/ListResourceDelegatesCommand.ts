import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListResourceDelegates } from "../model/operations/ListResourceDelegates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceDelegatesInput } from "../types/ListResourceDelegatesInput";
import { ListResourceDelegatesOutput } from "../types/ListResourceDelegatesOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/ListResourceDelegatesInput";
export * from "../types/ListResourceDelegatesOutput";
export * from "../types/ListResourceDelegatesExceptionsUnion";

export class ListResourceDelegatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceDelegatesInput,
      OutputTypesUnion,
      ListResourceDelegatesOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListResourceDelegates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceDelegatesInput,
    ListResourceDelegatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListResourceDelegatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceDelegatesInput,
    ListResourceDelegatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourceDelegatesInput, ListResourceDelegatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
