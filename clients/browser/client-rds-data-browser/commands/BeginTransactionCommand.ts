import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BeginTransaction } from "../model/operations/BeginTransaction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BeginTransactionInput } from "../types/BeginTransactionInput";
import { BeginTransactionOutput } from "../types/BeginTransactionOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/BeginTransactionInput";
export * from "../types/BeginTransactionOutput";
export * from "../types/BeginTransactionExceptionsUnion";

export class BeginTransactionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BeginTransactionInput,
      OutputTypesUnion,
      BeginTransactionOutput,
      RDSDataResolvedConfiguration,
      Blob
    > {
  readonly model = BeginTransaction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BeginTransactionInput,
    BeginTransactionOutput,
    Blob
  >();

  constructor(readonly input: BeginTransactionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<BeginTransactionInput, BeginTransactionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BeginTransactionInput, BeginTransactionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
