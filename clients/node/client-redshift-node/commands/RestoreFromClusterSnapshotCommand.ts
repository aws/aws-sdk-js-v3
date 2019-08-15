import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreFromClusterSnapshot } from "../model/operations/RestoreFromClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreFromClusterSnapshotInput } from "../types/RestoreFromClusterSnapshotInput";
import { RestoreFromClusterSnapshotOutput } from "../types/RestoreFromClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RestoreFromClusterSnapshotInput";
export * from "../types/RestoreFromClusterSnapshotOutput";
export * from "../types/RestoreFromClusterSnapshotExceptionsUnion";

export class RestoreFromClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreFromClusterSnapshotInput,
      OutputTypesUnion,
      RestoreFromClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreFromClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreFromClusterSnapshotInput,
    RestoreFromClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreFromClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreFromClusterSnapshotInput,
    RestoreFromClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreFromClusterSnapshotInput,
        RestoreFromClusterSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
