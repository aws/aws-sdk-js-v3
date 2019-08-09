import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutBackupVaultAccessPolicy } from "../model/PutBackupVaultAccessPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBackupVaultAccessPolicyInput } from "../types/PutBackupVaultAccessPolicyInput";
import { PutBackupVaultAccessPolicyOutput } from "../types/PutBackupVaultAccessPolicyOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/PutBackupVaultAccessPolicyInput";
export * from "../types/PutBackupVaultAccessPolicyOutput";
export * from "../types/PutBackupVaultAccessPolicyExceptionsUnion";

export class PutBackupVaultAccessPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBackupVaultAccessPolicyInput,
      OutputTypesUnion,
      PutBackupVaultAccessPolicyOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutBackupVaultAccessPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBackupVaultAccessPolicyInput,
    PutBackupVaultAccessPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutBackupVaultAccessPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutBackupVaultAccessPolicyInput,
    PutBackupVaultAccessPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutBackupVaultAccessPolicyInput,
        PutBackupVaultAccessPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
