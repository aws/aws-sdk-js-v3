import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreSecret } from "../model/RestoreSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreSecretInput } from "../types/RestoreSecretInput";
import { RestoreSecretOutput } from "../types/RestoreSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/RestoreSecretInput";
export * from "../types/RestoreSecretOutput";
export * from "../types/RestoreSecretExceptionsUnion";

export class RestoreSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreSecretInput,
      OutputTypesUnion,
      RestoreSecretOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreSecretInput,
    RestoreSecretOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<RestoreSecretInput, RestoreSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreSecretInput, RestoreSecretOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
