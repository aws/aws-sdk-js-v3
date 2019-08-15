import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAttributes } from "../model/operations/ListAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttributesInput } from "../types/ListAttributesInput";
import { ListAttributesOutput } from "../types/ListAttributesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListAttributesInput";
export * from "../types/ListAttributesOutput";
export * from "../types/ListAttributesExceptionsUnion";

export class ListAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttributesInput,
      OutputTypesUnion,
      ListAttributesOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttributesInput,
    ListAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAttributesInput, ListAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttributesInput, ListAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
