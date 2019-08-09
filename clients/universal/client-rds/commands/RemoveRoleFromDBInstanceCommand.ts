import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveRoleFromDBInstance } from "../model/RemoveRoleFromDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveRoleFromDBInstanceInput } from "../types/RemoveRoleFromDBInstanceInput";
import { RemoveRoleFromDBInstanceOutput } from "../types/RemoveRoleFromDBInstanceOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RemoveRoleFromDBInstanceInput";
export * from "../types/RemoveRoleFromDBInstanceOutput";
export * from "../types/RemoveRoleFromDBInstanceExceptionsUnion";

export class RemoveRoleFromDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveRoleFromDBInstanceInput,
      OutputTypesUnion,
      RemoveRoleFromDBInstanceOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveRoleFromDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveRoleFromDBInstanceInput,
    RemoveRoleFromDBInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveRoleFromDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveRoleFromDBInstanceInput,
    RemoveRoleFromDBInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveRoleFromDBInstanceInput, RemoveRoleFromDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
