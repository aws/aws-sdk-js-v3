import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseSnapshots } from "../model/GetRelationalDatabaseSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseSnapshotsInput } from "../types/GetRelationalDatabaseSnapshotsInput";
import { GetRelationalDatabaseSnapshotsOutput } from "../types/GetRelationalDatabaseSnapshotsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseSnapshotsInput";
export * from "../types/GetRelationalDatabaseSnapshotsOutput";
export * from "../types/GetRelationalDatabaseSnapshotsExceptionsUnion";

export class GetRelationalDatabaseSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseSnapshotsInput,
      OutputTypesUnion,
      GetRelationalDatabaseSnapshotsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRelationalDatabaseSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseSnapshotsInput,
    GetRelationalDatabaseSnapshotsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRelationalDatabaseSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseSnapshotsInput,
    GetRelationalDatabaseSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseSnapshotsInput,
        GetRelationalDatabaseSnapshotsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
