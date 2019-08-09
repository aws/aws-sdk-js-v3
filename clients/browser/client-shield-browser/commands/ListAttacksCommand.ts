import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAttacks } from "../model/ListAttacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttacksInput } from "../types/ListAttacksInput";
import { ListAttacksOutput } from "../types/ListAttacksOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/ListAttacksInput";
export * from "../types/ListAttacksOutput";
export * from "../types/ListAttacksExceptionsUnion";

export class ListAttacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttacksInput,
      OutputTypesUnion,
      ListAttacksOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = ListAttacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttacksInput,
    ListAttacksOutput,
    Blob
  >();

  constructor(readonly input: ListAttacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAttacksInput, ListAttacksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttacksInput, ListAttacksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
