import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseSnapshot } from "../model/GetRelationalDatabaseSnapshot";
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
      Blob
    > {
  readonly model = GetRelationalDatabaseSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseSnapshotInput,
    GetRelationalDatabaseSnapshotOutput,
    Blob
  >();

  constructor(readonly input: GetRelationalDatabaseSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
