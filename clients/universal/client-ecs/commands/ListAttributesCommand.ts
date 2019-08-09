import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAttributes } from "../model/ListAttributes";
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
      Uint8Array
    > {
  readonly model = ListAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttributesInput,
    ListAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
