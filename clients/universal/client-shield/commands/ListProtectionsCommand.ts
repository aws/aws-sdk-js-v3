import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProtections } from "../model/ListProtections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProtectionsInput } from "../types/ListProtectionsInput";
import { ListProtectionsOutput } from "../types/ListProtectionsOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/ListProtectionsInput";
export * from "../types/ListProtectionsOutput";
export * from "../types/ListProtectionsExceptionsUnion";

export class ListProtectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProtectionsInput,
      OutputTypesUnion,
      ListProtectionsOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListProtections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProtectionsInput,
    ListProtectionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListProtectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<ListProtectionsInput, ListProtectionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProtectionsInput, ListProtectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
