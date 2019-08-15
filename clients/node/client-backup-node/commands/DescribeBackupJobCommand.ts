import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBackupJob } from "../model/operations/DescribeBackupJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBackupJobInput } from "../types/DescribeBackupJobInput";
import { DescribeBackupJobOutput } from "../types/DescribeBackupJobOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DescribeBackupJobInput";
export * from "../types/DescribeBackupJobOutput";
export * from "../types/DescribeBackupJobExceptionsUnion";

export class DescribeBackupJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBackupJobInput,
      OutputTypesUnion,
      DescribeBackupJobOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeBackupJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBackupJobInput,
    DescribeBackupJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBackupJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBackupJobInput, DescribeBackupJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBackupJobInput, DescribeBackupJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
