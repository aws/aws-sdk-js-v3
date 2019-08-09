import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVoiceConnectorTermination } from "../model/GetVoiceConnectorTermination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVoiceConnectorTerminationInput } from "../types/GetVoiceConnectorTerminationInput";
import { GetVoiceConnectorTerminationOutput } from "../types/GetVoiceConnectorTerminationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetVoiceConnectorTerminationInput";
export * from "../types/GetVoiceConnectorTerminationOutput";
export * from "../types/GetVoiceConnectorTerminationExceptionsUnion";

export class GetVoiceConnectorTerminationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVoiceConnectorTerminationInput,
      OutputTypesUnion,
      GetVoiceConnectorTerminationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetVoiceConnectorTermination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVoiceConnectorTerminationInput,
    GetVoiceConnectorTerminationOutput,
    Blob
  >();

  constructor(readonly input: GetVoiceConnectorTerminationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetVoiceConnectorTerminationInput,
    GetVoiceConnectorTerminationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetVoiceConnectorTerminationInput,
        GetVoiceConnectorTerminationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
