import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListByteMatchSets } from "../model/operations/ListByteMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListByteMatchSetsInput } from "../types/ListByteMatchSetsInput";
import { ListByteMatchSetsOutput } from "../types/ListByteMatchSetsOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListByteMatchSetsInput";
export * from "../types/ListByteMatchSetsOutput";
export * from "../types/ListByteMatchSetsExceptionsUnion";

export class ListByteMatchSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListByteMatchSetsInput,
      OutputTypesUnion,
      ListByteMatchSetsOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListByteMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListByteMatchSetsInput,
    ListByteMatchSetsOutput,
    Blob
  >();

  constructor(readonly input: ListByteMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<ListByteMatchSetsInput, ListByteMatchSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListByteMatchSetsInput, ListByteMatchSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
