import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAssociatedStacks } from "../model/operations/ListAssociatedStacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociatedStacksInput } from "../types/ListAssociatedStacksInput";
import { ListAssociatedStacksOutput } from "../types/ListAssociatedStacksOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/ListAssociatedStacksInput";
export * from "../types/ListAssociatedStacksOutput";
export * from "../types/ListAssociatedStacksExceptionsUnion";

export class ListAssociatedStacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociatedStacksInput,
      OutputTypesUnion,
      ListAssociatedStacksOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAssociatedStacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociatedStacksInput,
    ListAssociatedStacksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAssociatedStacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssociatedStacksInput,
    ListAssociatedStacksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssociatedStacksInput, ListAssociatedStacksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
