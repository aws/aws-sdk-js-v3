import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBInstance } from "../model/DeleteDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBInstanceInput } from "../types/DeleteDBInstanceInput";
import { DeleteDBInstanceOutput } from "../types/DeleteDBInstanceOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DeleteDBInstanceInput";
export * from "../types/DeleteDBInstanceOutput";
export * from "../types/DeleteDBInstanceExceptionsUnion";

export class DeleteDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBInstanceInput,
      OutputTypesUnion,
      DeleteDBInstanceOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBInstanceInput,
    DeleteDBInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDBInstanceInput, DeleteDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBInstanceInput, DeleteDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
