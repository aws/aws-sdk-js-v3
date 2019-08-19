import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPreset } from "../model/operations/GetPreset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPresetInput } from "../types/GetPresetInput";
import { GetPresetOutput } from "../types/GetPresetOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/GetPresetInput";
export * from "../types/GetPresetOutput";
export * from "../types/GetPresetExceptionsUnion";

export class GetPresetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPresetInput,
      OutputTypesUnion,
      GetPresetOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = GetPreset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPresetInput,
    GetPresetOutput,
    Blob
  >();

  constructor(readonly input: GetPresetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPresetInput, GetPresetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPresetInput, GetPresetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
