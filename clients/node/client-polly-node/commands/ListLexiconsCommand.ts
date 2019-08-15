import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLexicons } from "../model/operations/ListLexicons";
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
      _stream.Readable
    > {
  readonly model = ListLexicons;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLexiconsInput,
    ListLexiconsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLexiconsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
