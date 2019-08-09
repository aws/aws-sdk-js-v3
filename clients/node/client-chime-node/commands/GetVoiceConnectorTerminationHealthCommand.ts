import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetVoiceConnectorTerminationHealth } from "../model/GetVoiceConnectorTerminationHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVoiceConnectorTerminationHealthInput } from "../types/GetVoiceConnectorTerminationHealthInput";
import { GetVoiceConnectorTerminationHealthOutput } from "../types/GetVoiceConnectorTerminationHealthOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetVoiceConnectorTerminationHealthInput";
export * from "../types/GetVoiceConnectorTerminationHealthOutput";
export * from "../types/GetVoiceConnectorTerminationHealthExceptionsUnion";

export class GetVoiceConnectorTerminationHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVoiceConnectorTerminationHealthInput,
      OutputTypesUnion,
      GetVoiceConnectorTerminationHealthOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetVoiceConnectorTerminationHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVoiceConnectorTerminationHealthInput,
    GetVoiceConnectorTerminationHealthOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetVoiceConnectorTerminationHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetVoiceConnectorTerminationHealthInput,
    GetVoiceConnectorTerminationHealthOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetVoiceConnectorTerminationHealthInput,
        GetVoiceConnectorTerminationHealthOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
