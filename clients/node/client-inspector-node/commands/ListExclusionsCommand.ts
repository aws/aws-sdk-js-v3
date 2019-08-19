import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListExclusions } from "../model/operations/ListExclusions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListExclusionsInput } from "../types/ListExclusionsInput";
import { ListExclusionsOutput } from "../types/ListExclusionsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListExclusionsInput";
export * from "../types/ListExclusionsOutput";
export * from "../types/ListExclusionsExceptionsUnion";

export class ListExclusionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListExclusionsInput,
      OutputTypesUnion,
      ListExclusionsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListExclusions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListExclusionsInput,
    ListExclusionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListExclusionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<ListExclusionsInput, ListExclusionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListExclusionsInput, ListExclusionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
