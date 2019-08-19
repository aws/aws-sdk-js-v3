import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBackupVault } from "../model/operations/DescribeBackupVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBackupVaultInput } from "../types/DescribeBackupVaultInput";
import { DescribeBackupVaultOutput } from "../types/DescribeBackupVaultOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DescribeBackupVaultInput";
export * from "../types/DescribeBackupVaultOutput";
export * from "../types/DescribeBackupVaultExceptionsUnion";

export class DescribeBackupVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBackupVaultInput,
      OutputTypesUnion,
      DescribeBackupVaultOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeBackupVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBackupVaultInput,
    DescribeBackupVaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBackupVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBackupVaultInput,
    DescribeBackupVaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBackupVaultInput, DescribeBackupVaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
