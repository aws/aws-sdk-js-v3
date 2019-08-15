import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RollbackTransaction } from "../model/operations/RollbackTransaction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RollbackTransactionInput } from "../types/RollbackTransactionInput";
import { RollbackTransactionOutput } from "../types/RollbackTransactionOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/RollbackTransactionInput";
export * from "../types/RollbackTransactionOutput";
export * from "../types/RollbackTransactionExceptionsUnion";

export class RollbackTransactionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RollbackTransactionInput,
      OutputTypesUnion,
      RollbackTransactionOutput,
      RDSDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RollbackTransaction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RollbackTransactionInput,
    RollbackTransactionOutput,
    _stream.Readable
  >();

  constructor(readonly input: RollbackTransactionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RollbackTransactionInput,
    RollbackTransactionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RollbackTransactionInput, RollbackTransactionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
