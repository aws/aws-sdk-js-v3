import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVoiceConnectorOrigination } from "../model/GetVoiceConnectorOrigination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVoiceConnectorOriginationInput } from "../types/GetVoiceConnectorOriginationInput";
import { GetVoiceConnectorOriginationOutput } from "../types/GetVoiceConnectorOriginationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetVoiceConnectorOriginationInput";
export * from "../types/GetVoiceConnectorOriginationOutput";
export * from "../types/GetVoiceConnectorOriginationExceptionsUnion";

export class GetVoiceConnectorOriginationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVoiceConnectorOriginationInput,
      OutputTypesUnion,
      GetVoiceConnectorOriginationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetVoiceConnectorOrigination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVoiceConnectorOriginationInput,
    GetVoiceConnectorOriginationOutput,
    Blob
  >();

  constructor(readonly input: GetVoiceConnectorOriginationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetVoiceConnectorOriginationInput,
    GetVoiceConnectorOriginationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetVoiceConnectorOriginationInput,
        GetVoiceConnectorOriginationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
