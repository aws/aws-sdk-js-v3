import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSecret } from "../model/operations/CreateSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSecretInput } from "../types/CreateSecretInput";
import { CreateSecretOutput } from "../types/CreateSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/CreateSecretInput";
export * from "../types/CreateSecretOutput";
export * from "../types/CreateSecretExceptionsUnion";

export class CreateSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSecretInput,
      OutputTypesUnion,
      CreateSecretOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSecretInput,
    CreateSecretOutput,
    Blob
  >();

  constructor(readonly input: CreateSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSecretInput, CreateSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSecretInput, CreateSecretOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
