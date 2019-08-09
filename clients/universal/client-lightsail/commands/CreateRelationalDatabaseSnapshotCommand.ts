import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRelationalDatabaseSnapshot } from "../model/CreateRelationalDatabaseSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRelationalDatabaseSnapshotInput } from "../types/CreateRelationalDatabaseSnapshotInput";
import { CreateRelationalDatabaseSnapshotOutput } from "../types/CreateRelationalDatabaseSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateRelationalDatabaseSnapshotInput";
export * from "../types/CreateRelationalDatabaseSnapshotOutput";
export * from "../types/CreateRelationalDatabaseSnapshotExceptionsUnion";

export class CreateRelationalDatabaseSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRelationalDatabaseSnapshotInput,
      OutputTypesUnion,
      CreateRelationalDatabaseSnapshotOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateRelationalDatabaseSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRelationalDatabaseSnapshotInput,
    CreateRelationalDatabaseSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateRelationalDatabaseSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRelationalDatabaseSnapshotInput,
    CreateRelationalDatabaseSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateRelationalDatabaseSnapshotInput,
        CreateRelationalDatabaseSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
