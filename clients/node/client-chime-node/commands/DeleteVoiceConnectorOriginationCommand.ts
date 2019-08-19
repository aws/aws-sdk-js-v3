import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVoiceConnectorOrigination } from "../model/operations/DeleteVoiceConnectorOrigination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVoiceConnectorOriginationInput } from "../types/DeleteVoiceConnectorOriginationInput";
import { DeleteVoiceConnectorOriginationOutput } from "../types/DeleteVoiceConnectorOriginationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteVoiceConnectorOriginationInput";
export * from "../types/DeleteVoiceConnectorOriginationOutput";
export * from "../types/DeleteVoiceConnectorOriginationExceptionsUnion";

export class DeleteVoiceConnectorOriginationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVoiceConnectorOriginationInput,
      OutputTypesUnion,
      DeleteVoiceConnectorOriginationOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVoiceConnectorOrigination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVoiceConnectorOriginationInput,
    DeleteVoiceConnectorOriginationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVoiceConnectorOriginationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVoiceConnectorOriginationInput,
    DeleteVoiceConnectorOriginationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVoiceConnectorOriginationInput,
        DeleteVoiceConnectorOriginationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
