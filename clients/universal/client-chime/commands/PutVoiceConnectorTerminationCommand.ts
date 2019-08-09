import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutVoiceConnectorTermination } from "../model/PutVoiceConnectorTermination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutVoiceConnectorTerminationInput } from "../types/PutVoiceConnectorTerminationInput";
import { PutVoiceConnectorTerminationOutput } from "../types/PutVoiceConnectorTerminationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/PutVoiceConnectorTerminationInput";
export * from "../types/PutVoiceConnectorTerminationOutput";
export * from "../types/PutVoiceConnectorTerminationExceptionsUnion";

export class PutVoiceConnectorTerminationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutVoiceConnectorTerminationInput,
      OutputTypesUnion,
      PutVoiceConnectorTerminationOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutVoiceConnectorTermination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutVoiceConnectorTerminationInput,
    PutVoiceConnectorTerminationOutput,
    Uint8Array
  >();

  constructor(readonly input: PutVoiceConnectorTerminationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutVoiceConnectorTerminationInput,
    PutVoiceConnectorTerminationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutVoiceConnectorTerminationInput,
        PutVoiceConnectorTerminationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
