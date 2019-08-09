import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePreset } from "../model/CreatePreset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePresetInput } from "../types/CreatePresetInput";
import { CreatePresetOutput } from "../types/CreatePresetOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/CreatePresetInput";
export * from "../types/CreatePresetOutput";
export * from "../types/CreatePresetExceptionsUnion";

export class CreatePresetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePresetInput,
      OutputTypesUnion,
      CreatePresetOutput,
      ElasticTranscoderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePreset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePresetInput,
    CreatePresetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePresetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePresetInput, CreatePresetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePresetInput, CreatePresetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
