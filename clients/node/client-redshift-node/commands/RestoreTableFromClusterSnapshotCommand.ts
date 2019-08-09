import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreTableFromClusterSnapshot } from "../model/RestoreTableFromClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreTableFromClusterSnapshotInput } from "../types/RestoreTableFromClusterSnapshotInput";
import { RestoreTableFromClusterSnapshotOutput } from "../types/RestoreTableFromClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RestoreTableFromClusterSnapshotInput";
export * from "../types/RestoreTableFromClusterSnapshotOutput";
export * from "../types/RestoreTableFromClusterSnapshotExceptionsUnion";

export class RestoreTableFromClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreTableFromClusterSnapshotInput,
      OutputTypesUnion,
      RestoreTableFromClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreTableFromClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreTableFromClusterSnapshotInput,
    RestoreTableFromClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreTableFromClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreTableFromClusterSnapshotInput,
    RestoreTableFromClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreTableFromClusterSnapshotInput,
        RestoreTableFromClusterSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
