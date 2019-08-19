import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBackupVaultAccessPolicy } from "../model/operations/GetBackupVaultAccessPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupVaultAccessPolicyInput } from "../types/GetBackupVaultAccessPolicyInput";
import { GetBackupVaultAccessPolicyOutput } from "../types/GetBackupVaultAccessPolicyOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupVaultAccessPolicyInput";
export * from "../types/GetBackupVaultAccessPolicyOutput";
export * from "../types/GetBackupVaultAccessPolicyExceptionsUnion";

export class GetBackupVaultAccessPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupVaultAccessPolicyInput,
      OutputTypesUnion,
      GetBackupVaultAccessPolicyOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBackupVaultAccessPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupVaultAccessPolicyInput,
    GetBackupVaultAccessPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBackupVaultAccessPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBackupVaultAccessPolicyInput,
    GetBackupVaultAccessPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetBackupVaultAccessPolicyInput,
        GetBackupVaultAccessPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
