import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CompleteVaultLock } from "../model/operations/CompleteVaultLock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompleteVaultLockInput } from "../types/CompleteVaultLockInput";
import { CompleteVaultLockOutput } from "../types/CompleteVaultLockOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/CompleteVaultLockInput";
export * from "../types/CompleteVaultLockOutput";
export * from "../types/CompleteVaultLockExceptionsUnion";

export class CompleteVaultLockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompleteVaultLockInput,
      OutputTypesUnion,
      CompleteVaultLockOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = CompleteVaultLock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompleteVaultLockInput,
    CompleteVaultLockOutput,
    Blob
  >();

  constructor(readonly input: CompleteVaultLockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<CompleteVaultLockInput, CompleteVaultLockOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CompleteVaultLockInput, CompleteVaultLockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
