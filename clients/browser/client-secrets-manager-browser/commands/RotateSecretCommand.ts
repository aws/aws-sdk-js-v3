import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RotateSecret } from "../model/operations/RotateSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RotateSecretInput } from "../types/RotateSecretInput";
import { RotateSecretOutput } from "../types/RotateSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/RotateSecretInput";
export * from "../types/RotateSecretOutput";
export * from "../types/RotateSecretExceptionsUnion";

export class RotateSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RotateSecretInput,
      OutputTypesUnion,
      RotateSecretOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = RotateSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RotateSecretInput,
    RotateSecretOutput,
    Blob
  >();

  constructor(readonly input: RotateSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<RotateSecretInput, RotateSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RotateSecretInput, RotateSecretOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
