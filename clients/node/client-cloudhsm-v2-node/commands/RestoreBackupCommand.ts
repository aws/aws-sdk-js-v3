import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreBackup } from "../model/operations/RestoreBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreBackupInput } from "../types/RestoreBackupInput";
import { RestoreBackupOutput } from "../types/RestoreBackupOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/RestoreBackupInput";
export * from "../types/RestoreBackupOutput";
export * from "../types/RestoreBackupExceptionsUnion";

export class RestoreBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreBackupInput,
      OutputTypesUnion,
      RestoreBackupOutput,
      CloudHSMV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreBackupInput,
    RestoreBackupOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RestoreBackupInput, RestoreBackupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreBackupInput, RestoreBackupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
