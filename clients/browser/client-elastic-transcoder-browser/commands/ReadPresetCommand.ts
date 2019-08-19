import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReadPreset } from "../model/operations/ReadPreset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReadPresetInput } from "../types/ReadPresetInput";
import { ReadPresetOutput } from "../types/ReadPresetOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/ReadPresetInput";
export * from "../types/ReadPresetOutput";
export * from "../types/ReadPresetExceptionsUnion";

export class ReadPresetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReadPresetInput,
      OutputTypesUnion,
      ReadPresetOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = ReadPreset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReadPresetInput,
    ReadPresetOutput,
    Blob
  >();

  constructor(readonly input: ReadPresetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<ReadPresetInput, ReadPresetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReadPresetInput, ReadPresetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
