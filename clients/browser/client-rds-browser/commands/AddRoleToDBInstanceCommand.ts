import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddRoleToDBInstance } from "../model/AddRoleToDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddRoleToDBInstanceInput } from "../types/AddRoleToDBInstanceInput";
import { AddRoleToDBInstanceOutput } from "../types/AddRoleToDBInstanceOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/AddRoleToDBInstanceInput";
export * from "../types/AddRoleToDBInstanceOutput";
export * from "../types/AddRoleToDBInstanceExceptionsUnion";

export class AddRoleToDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddRoleToDBInstanceInput,
      OutputTypesUnion,
      AddRoleToDBInstanceOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = AddRoleToDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddRoleToDBInstanceInput,
    AddRoleToDBInstanceOutput,
    Blob
  >();

  constructor(readonly input: AddRoleToDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddRoleToDBInstanceInput,
    AddRoleToDBInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddRoleToDBInstanceInput, AddRoleToDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
