import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RebootReplicationInstance } from "../model/operations/RebootReplicationInstance";
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
      _stream.Readable
    > {
  readonly model = RebootReplicationInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootReplicationInstanceInput,
    RebootReplicationInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: RebootReplicationInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
