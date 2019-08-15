import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutVoiceConnectorOrigination } from "../model/operations/PutVoiceConnectorOrigination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutVoiceConnectorOriginationInput } from "../types/PutVoiceConnectorOriginationInput";
import { PutVoiceConnectorOriginationOutput } from "../types/PutVoiceConnectorOriginationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/PutVoiceConnectorOriginationInput";
export * from "../types/PutVoiceConnectorOriginationOutput";
export * from "../types/PutVoiceConnectorOriginationExceptionsUnion";

export class PutVoiceConnectorOriginationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutVoiceConnectorOriginationInput,
      OutputTypesUnion,
      PutVoiceConnectorOriginationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = PutVoiceConnectorOrigination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutVoiceConnectorOriginationInput,
    PutVoiceConnectorOriginationOutput,
    Blob
  >();

  constructor(readonly input: PutVoiceConnectorOriginationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutVoiceConnectorOriginationInput,
    PutVoiceConnectorOriginationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutVoiceConnectorOriginationInput,
        PutVoiceConnectorOriginationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
