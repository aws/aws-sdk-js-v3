import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreDBClusterFromSnapshot } from "../model/operations/RestoreDBClusterFromSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBClusterFromSnapshotInput } from "../types/RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "../types/RestoreDBClusterFromSnapshotOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/RestoreDBClusterFromSnapshotInput";
export * from "../types/RestoreDBClusterFromSnapshotOutput";
export * from "../types/RestoreDBClusterFromSnapshotExceptionsUnion";

export class RestoreDBClusterFromSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBClusterFromSnapshotInput,
      OutputTypesUnion,
      RestoreDBClusterFromSnapshotOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreDBClusterFromSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBClusterFromSnapshotInput,
    RestoreDBClusterFromSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreDBClusterFromSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBClusterFromSnapshotInput,
    RestoreDBClusterFromSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreDBClusterFromSnapshotInput,
        RestoreDBClusterFromSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
