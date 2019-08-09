import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = GetLexicon;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLexiconInput,
    GetLexiconOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLexiconInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
