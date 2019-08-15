import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProtections } from "../model/operations/ListProtections";
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
      Blob
    > {
  readonly model = ListProtections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProtectionsInput,
    ListProtectionsOutput,
    Blob
  >();

  constructor(readonly input: ListProtectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
