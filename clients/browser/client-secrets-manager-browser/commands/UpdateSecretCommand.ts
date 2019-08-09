import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSecret } from "../model/UpdateSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSecretInput } from "../types/UpdateSecretInput";
import { UpdateSecretOutput } from "../types/UpdateSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/UpdateSecretInput";
export * from "../types/UpdateSecretOutput";
export * from "../types/UpdateSecretExceptionsUnion";

export class UpdateSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSecretInput,
      OutputTypesUnion,
      UpdateSecretOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSecretInput,
    UpdateSecretOutput,
    Blob
  >();

  constructor(readonly input: UpdateSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSecretInput, UpdateSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSecretInput, UpdateSecretOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
