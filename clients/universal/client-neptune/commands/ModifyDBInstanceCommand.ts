import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBInstance } from "../model/ModifyDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBInstanceInput } from "../types/ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "../types/ModifyDBInstanceOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/ModifyDBInstanceInput";
export * from "../types/ModifyDBInstanceOutput";
export * from "../types/ModifyDBInstanceExceptionsUnion";

export class ModifyDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBInstanceInput,
      OutputTypesUnion,
      ModifyDBInstanceOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBInstanceInput,
    ModifyDBInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyDBInstanceInput, ModifyDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBInstanceInput, ModifyDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
