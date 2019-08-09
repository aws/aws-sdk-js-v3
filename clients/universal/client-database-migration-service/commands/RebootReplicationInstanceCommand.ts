import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootReplicationInstance } from "../model/RebootReplicationInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootReplicationInstanceInput } from "../types/RebootReplicationInstanceInput";
import { RebootReplicationInstanceOutput } from "../types/RebootReplicationInstanceOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/RebootReplicationInstanceInput";
export * from "../types/RebootReplicationInstanceOutput";
export * from "../types/RebootReplicationInstanceExceptionsUnion";

export class RebootReplicationInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootReplicationInstanceInput,
      OutputTypesUnion,
      RebootReplicationInstanceOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RebootReplicationInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootReplicationInstanceInput,
    RebootReplicationInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: RebootReplicationInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RebootReplicationInstanceInput,
    RebootReplicationInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootReplicationInstanceInput, RebootReplicationInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
