import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVoiceConnector } from "../model/operations/UpdateVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVoiceConnectorInput } from "../types/UpdateVoiceConnectorInput";
import { UpdateVoiceConnectorOutput } from "../types/UpdateVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateVoiceConnectorInput";
export * from "../types/UpdateVoiceConnectorOutput";
export * from "../types/UpdateVoiceConnectorExceptionsUnion";

export class UpdateVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVoiceConnectorInput,
      OutputTypesUnion,
      UpdateVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVoiceConnectorInput,
    UpdateVoiceConnectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVoiceConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVoiceConnectorInput,
    UpdateVoiceConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVoiceConnectorInput, UpdateVoiceConnectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
