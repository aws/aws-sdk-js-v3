import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectKeyPhrases } from "../model/operations/DetectKeyPhrases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectKeyPhrasesInput } from "../types/DetectKeyPhrasesInput";
import { DetectKeyPhrasesOutput } from "../types/DetectKeyPhrasesOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DetectKeyPhrasesInput";
export * from "../types/DetectKeyPhrasesOutput";
export * from "../types/DetectKeyPhrasesExceptionsUnion";

export class DetectKeyPhrasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectKeyPhrasesInput,
      OutputTypesUnion,
      DetectKeyPhrasesOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetectKeyPhrases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectKeyPhrasesInput,
    DetectKeyPhrasesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectKeyPhrasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectKeyPhrasesInput, DetectKeyPhrasesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectKeyPhrasesInput, DetectKeyPhrasesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
