import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AbortVaultLock } from "../model/AbortVaultLock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AbortVaultLockInput } from "../types/AbortVaultLockInput";
import { AbortVaultLockOutput } from "../types/AbortVaultLockOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/AbortVaultLockInput";
export * from "../types/AbortVaultLockOutput";
export * from "../types/AbortVaultLockExceptionsUnion";

export class AbortVaultLockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AbortVaultLockInput,
      OutputTypesUnion,
      AbortVaultLockOutput,
      GlacierResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AbortVaultLockInput,
    AbortVaultLockOutput,
    _stream.Readable
  >();

  constructor(readonly input: AbortVaultLockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<AbortVaultLockInput, AbortVaultLockOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: AbortVaultLock
    };

    return stack.resolve(
      handler<AbortVaultLockInput, AbortVaultLockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
