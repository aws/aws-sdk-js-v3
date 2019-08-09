import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEntityRecognizer } from "../model/DeleteEntityRecognizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEntityRecognizerInput } from "../types/DeleteEntityRecognizerInput";
import { DeleteEntityRecognizerOutput } from "../types/DeleteEntityRecognizerOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DeleteEntityRecognizerInput";
export * from "../types/DeleteEntityRecognizerOutput";
export * from "../types/DeleteEntityRecognizerExceptionsUnion";

export class DeleteEntityRecognizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEntityRecognizerInput,
      OutputTypesUnion,
      DeleteEntityRecognizerOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEntityRecognizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEntityRecognizerInput,
    DeleteEntityRecognizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEntityRecognizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEntityRecognizerInput,
    DeleteEntityRecognizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEntityRecognizerInput, DeleteEntityRecognizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
