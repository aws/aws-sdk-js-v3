import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVoiceConnector } from "../model/operations/CreateVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVoiceConnectorInput } from "../types/CreateVoiceConnectorInput";
import { CreateVoiceConnectorOutput } from "../types/CreateVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/CreateVoiceConnectorInput";
export * from "../types/CreateVoiceConnectorOutput";
export * from "../types/CreateVoiceConnectorExceptionsUnion";

export class CreateVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVoiceConnectorInput,
      OutputTypesUnion,
      CreateVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVoiceConnectorInput,
    CreateVoiceConnectorOutput,
    Blob
  >();

  constructor(readonly input: CreateVoiceConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVoiceConnectorInput,
    CreateVoiceConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVoiceConnectorInput, CreateVoiceConnectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
