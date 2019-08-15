import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSecretValue } from "../model/operations/GetSecretValue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSecretValueInput } from "../types/GetSecretValueInput";
import { GetSecretValueOutput } from "../types/GetSecretValueOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/GetSecretValueInput";
export * from "../types/GetSecretValueOutput";
export * from "../types/GetSecretValueExceptionsUnion";

export class GetSecretValueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSecretValueInput,
      OutputTypesUnion,
      GetSecretValueOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = GetSecretValue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSecretValueInput,
    GetSecretValueOutput,
    Blob
  >();

  constructor(readonly input: GetSecretValueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSecretValueInput, GetSecretValueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSecretValueInput, GetSecretValueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
