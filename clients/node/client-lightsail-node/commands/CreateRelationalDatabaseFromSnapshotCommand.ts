import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRelationalDatabaseFromSnapshot } from "../model/CreateRelationalDatabaseFromSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRelationalDatabaseFromSnapshotInput } from "../types/CreateRelationalDatabaseFromSnapshotInput";
import { CreateRelationalDatabaseFromSnapshotOutput } from "../types/CreateRelationalDatabaseFromSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateRelationalDatabaseFromSnapshotInput";
export * from "../types/CreateRelationalDatabaseFromSnapshotOutput";
export * from "../types/CreateRelationalDatabaseFromSnapshotExceptionsUnion";

export class CreateRelationalDatabaseFromSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRelationalDatabaseFromSnapshotInput,
      OutputTypesUnion,
      CreateRelationalDatabaseFromSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRelationalDatabaseFromSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRelationalDatabaseFromSnapshotInput,
    CreateRelationalDatabaseFromSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRelationalDatabaseFromSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRelationalDatabaseFromSnapshotInput,
    CreateRelationalDatabaseFromSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateRelationalDatabaseFromSnapshotInput,
        CreateRelationalDatabaseFromSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
