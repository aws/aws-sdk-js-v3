import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDBInstance } from "../model/operations/ModifyDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBInstanceInput } from "../types/ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "../types/ModifyDBInstanceOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
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
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBInstanceInput,
    ModifyDBInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
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
