import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLexicon } from "../model/PutLexicon";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLexiconInput } from "../types/PutLexiconInput";
import { PutLexiconOutput } from "../types/PutLexiconOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/PutLexiconInput";
export * from "../types/PutLexiconOutput";
export * from "../types/PutLexiconExceptionsUnion";

export class PutLexiconCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLexiconInput,
      OutputTypesUnion,
      PutLexiconOutput,
      PollyResolvedConfiguration,
      Blob
    > {
  readonly model = PutLexicon;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLexiconInput,
    PutLexiconOutput,
    Blob
  >();

  constructor(readonly input: PutLexiconInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<PutLexiconInput, PutLexiconOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLexiconInput, PutLexiconOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
