import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePreset } from "../model/CreatePreset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePresetInput } from "../types/CreatePresetInput";
import { CreatePresetOutput } from "../types/CreatePresetOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
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
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePreset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePresetInput,
    CreatePresetOutput,
    Uint8Array
  >();

  constructor(readonly input: CreatePresetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
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
