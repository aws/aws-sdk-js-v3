import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRecoveryPointsByResource } from "../model/ListRecoveryPointsByResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRecoveryPointsByResourceInput } from "../types/ListRecoveryPointsByResourceInput";
import { ListRecoveryPointsByResourceOutput } from "../types/ListRecoveryPointsByResourceOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListRecoveryPointsByResourceInput";
export * from "../types/ListRecoveryPointsByResourceOutput";
export * from "../types/ListRecoveryPointsByResourceExceptionsUnion";

export class ListRecoveryPointsByResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRecoveryPointsByResourceInput,
      OutputTypesUnion,
      ListRecoveryPointsByResourceOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRecoveryPointsByResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRecoveryPointsByResourceInput,
    ListRecoveryPointsByResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRecoveryPointsByResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRecoveryPointsByResourceInput,
    ListRecoveryPointsByResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListRecoveryPointsByResourceInput,
        ListRecoveryPointsByResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
