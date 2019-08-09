import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutSecretValue } from "../model/PutSecretValue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSecretValueInput } from "../types/PutSecretValueInput";
import { PutSecretValueOutput } from "../types/PutSecretValueOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/PutSecretValueInput";
export * from "../types/PutSecretValueOutput";
export * from "../types/PutSecretValueExceptionsUnion";

export class PutSecretValueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSecretValueInput,
      OutputTypesUnion,
      PutSecretValueOutput,
      SecretsManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutSecretValue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSecretValueInput,
    PutSecretValueOutput,
    Uint8Array
  >();

  constructor(readonly input: PutSecretValueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<PutSecretValueInput, PutSecretValueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSecretValueInput, PutSecretValueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
