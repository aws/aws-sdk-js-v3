import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFileSystemFromBackup } from "../model/CreateFileSystemFromBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFileSystemFromBackupInput } from "../types/CreateFileSystemFromBackupInput";
import { CreateFileSystemFromBackupOutput } from "../types/CreateFileSystemFromBackupOutput";
import { FSxResolvedConfiguration } from "../FSxConfiguration";
export * from "../types/CreateFileSystemFromBackupInput";
export * from "../types/CreateFileSystemFromBackupOutput";
export * from "../types/CreateFileSystemFromBackupExceptionsUnion";

export class CreateFileSystemFromBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFileSystemFromBackupInput,
      OutputTypesUnion,
      CreateFileSystemFromBackupOutput,
      FSxResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFileSystemFromBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFileSystemFromBackupInput,
    CreateFileSystemFromBackupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFileSystemFromBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FSxResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFileSystemFromBackupInput,
    CreateFileSystemFromBackupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateFileSystemFromBackupInput,
        CreateFileSystemFromBackupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
