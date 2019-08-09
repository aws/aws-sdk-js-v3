import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLexicons } from "../model/ListLexicons";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLexiconsInput } from "../types/ListLexiconsInput";
import { ListLexiconsOutput } from "../types/ListLexiconsOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/ListLexiconsInput";
export * from "../types/ListLexiconsOutput";
export * from "../types/ListLexiconsExceptionsUnion";

export class ListLexiconsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLexiconsInput,
      OutputTypesUnion,
      ListLexiconsOutput,
      PollyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLexicons;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLexiconsInput,
    ListLexiconsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLexiconsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLexiconsInput, ListLexiconsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLexiconsInput, ListLexiconsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
