import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEntityRecognizer } from "../model/CreateEntityRecognizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEntityRecognizerInput } from "../types/CreateEntityRecognizerInput";
import { CreateEntityRecognizerOutput } from "../types/CreateEntityRecognizerOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/CreateEntityRecognizerInput";
export * from "../types/CreateEntityRecognizerOutput";
export * from "../types/CreateEntityRecognizerExceptionsUnion";

export class CreateEntityRecognizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEntityRecognizerInput,
      OutputTypesUnion,
      CreateEntityRecognizerOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEntityRecognizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEntityRecognizerInput,
    CreateEntityRecognizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEntityRecognizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEntityRecognizerInput,
    CreateEntityRecognizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEntityRecognizerInput, CreateEntityRecognizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
