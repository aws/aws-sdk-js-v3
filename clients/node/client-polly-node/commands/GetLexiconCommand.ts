import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLexicon } from "../model/GetLexicon";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLexiconInput } from "../types/GetLexiconInput";
import { GetLexiconOutput } from "../types/GetLexiconOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/GetLexiconInput";
export * from "../types/GetLexiconOutput";
export * from "../types/GetLexiconExceptionsUnion";

export class GetLexiconCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLexiconInput,
      OutputTypesUnion,
      GetLexiconOutput,
      PollyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLexicon;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLexiconInput,
    GetLexiconOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLexiconInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLexiconInput, GetLexiconOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLexiconInput, GetLexiconOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
