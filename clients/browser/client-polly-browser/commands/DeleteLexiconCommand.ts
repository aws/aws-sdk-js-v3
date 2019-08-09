import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLexicon } from "../model/DeleteLexicon";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLexiconInput } from "../types/DeleteLexiconInput";
import { DeleteLexiconOutput } from "../types/DeleteLexiconOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/DeleteLexiconInput";
export * from "../types/DeleteLexiconOutput";
export * from "../types/DeleteLexiconExceptionsUnion";

export class DeleteLexiconCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLexiconInput,
      OutputTypesUnion,
      DeleteLexiconOutput,
      PollyResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLexicon;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLexiconInput,
    DeleteLexiconOutput,
    Blob
  >();

  constructor(readonly input: DeleteLexiconInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLexiconInput, DeleteLexiconOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLexiconInput, DeleteLexiconOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
