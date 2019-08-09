import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReloadTables } from "../model/ReloadTables";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReloadTablesInput } from "../types/ReloadTablesInput";
import { ReloadTablesOutput } from "../types/ReloadTablesOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/ReloadTablesInput";
export * from "../types/ReloadTablesOutput";
export * from "../types/ReloadTablesExceptionsUnion";

export class ReloadTablesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReloadTablesInput,
      OutputTypesUnion,
      ReloadTablesOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ReloadTables;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReloadTablesInput,
    ReloadTablesOutput,
    Uint8Array
  >();

  constructor(readonly input: ReloadTablesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ReloadTablesInput, ReloadTablesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReloadTablesInput, ReloadTablesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
