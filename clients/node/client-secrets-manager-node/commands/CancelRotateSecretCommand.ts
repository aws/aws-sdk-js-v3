import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelRotateSecret } from "../model/operations/CancelRotateSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelRotateSecretInput } from "../types/CancelRotateSecretInput";
import { CancelRotateSecretOutput } from "../types/CancelRotateSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/CancelRotateSecretInput";
export * from "../types/CancelRotateSecretOutput";
export * from "../types/CancelRotateSecretExceptionsUnion";

export class CancelRotateSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelRotateSecretInput,
      OutputTypesUnion,
      CancelRotateSecretOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelRotateSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelRotateSecretInput,
    CancelRotateSecretOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelRotateSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelRotateSecretInput,
    CancelRotateSecretOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelRotateSecretInput, CancelRotateSecretOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
