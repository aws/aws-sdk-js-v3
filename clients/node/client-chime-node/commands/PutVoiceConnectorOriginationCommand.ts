import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutVoiceConnectorOrigination } from "../model/PutVoiceConnectorOrigination";
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
      _stream.Readable
    > {
  readonly model = PutVoiceConnectorOrigination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutVoiceConnectorOriginationInput,
    PutVoiceConnectorOriginationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutVoiceConnectorOriginationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
