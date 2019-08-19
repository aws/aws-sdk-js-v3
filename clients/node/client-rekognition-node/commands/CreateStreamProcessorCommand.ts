import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateStreamProcessor } from "../model/operations/CreateStreamProcessor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStreamProcessorInput } from "../types/CreateStreamProcessorInput";
import { CreateStreamProcessorOutput } from "../types/CreateStreamProcessorOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/CreateStreamProcessorInput";
export * from "../types/CreateStreamProcessorOutput";
export * from "../types/CreateStreamProcessorExceptionsUnion";

export class CreateStreamProcessorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStreamProcessorInput,
      OutputTypesUnion,
      CreateStreamProcessorOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateStreamProcessor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStreamProcessorInput,
    CreateStreamProcessorOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateStreamProcessorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStreamProcessorInput,
    CreateStreamProcessorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStreamProcessorInput, CreateStreamProcessorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
