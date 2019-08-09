import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSecretVersionStage } from "../model/UpdateSecretVersionStage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSecretVersionStageInput } from "../types/UpdateSecretVersionStageInput";
import { UpdateSecretVersionStageOutput } from "../types/UpdateSecretVersionStageOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/UpdateSecretVersionStageInput";
export * from "../types/UpdateSecretVersionStageOutput";
export * from "../types/UpdateSecretVersionStageExceptionsUnion";

export class UpdateSecretVersionStageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSecretVersionStageInput,
      OutputTypesUnion,
      UpdateSecretVersionStageOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSecretVersionStage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSecretVersionStageInput,
    UpdateSecretVersionStageOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSecretVersionStageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSecretVersionStageInput,
    UpdateSecretVersionStageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSecretVersionStageInput, UpdateSecretVersionStageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
