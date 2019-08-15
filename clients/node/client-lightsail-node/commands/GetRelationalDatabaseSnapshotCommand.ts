import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRelationalDatabaseSnapshot } from "../model/operations/GetRelationalDatabaseSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseSnapshotInput } from "../types/GetRelationalDatabaseSnapshotInput";
import { GetRelationalDatabaseSnapshotOutput } from "../types/GetRelationalDatabaseSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseSnapshotInput";
export * from "../types/GetRelationalDatabaseSnapshotOutput";
export * from "../types/GetRelationalDatabaseSnapshotExceptionsUnion";

export class GetRelationalDatabaseSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseSnapshotInput,
      OutputTypesUnion,
      GetRelationalDatabaseSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRelationalDatabaseSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseSnapshotInput,
    GetRelationalDatabaseSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRelationalDatabaseSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseSnapshotInput,
    GetRelationalDatabaseSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseSnapshotInput,
        GetRelationalDatabaseSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
