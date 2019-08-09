import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVoiceConnector } from "../model/GetVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVoiceConnectorInput } from "../types/GetVoiceConnectorInput";
import { GetVoiceConnectorOutput } from "../types/GetVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetVoiceConnectorInput";
export * from "../types/GetVoiceConnectorOutput";
export * from "../types/GetVoiceConnectorExceptionsUnion";

export class GetVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVoiceConnectorInput,
      OutputTypesUnion,
      GetVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVoiceConnectorInput,
    GetVoiceConnectorOutput,
    Blob
  >();

  constructor(readonly input: GetVoiceConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetVoiceConnectorInput, GetVoiceConnectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVoiceConnectorInput, GetVoiceConnectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
