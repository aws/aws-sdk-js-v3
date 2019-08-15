import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyReplicationInstance } from "../model/operations/ModifyReplicationInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReplicationInstanceInput } from "../types/ModifyReplicationInstanceInput";
import { ModifyReplicationInstanceOutput } from "../types/ModifyReplicationInstanceOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/ModifyReplicationInstanceInput";
export * from "../types/ModifyReplicationInstanceOutput";
export * from "../types/ModifyReplicationInstanceExceptionsUnion";

export class ModifyReplicationInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReplicationInstanceInput,
      OutputTypesUnion,
      ModifyReplicationInstanceOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyReplicationInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReplicationInstanceInput,
    ModifyReplicationInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyReplicationInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReplicationInstanceInput,
    ModifyReplicationInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyReplicationInstanceInput, ModifyReplicationInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
