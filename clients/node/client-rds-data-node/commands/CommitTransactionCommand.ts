import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CommitTransaction } from "../model/operations/CommitTransaction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CommitTransactionInput } from "../types/CommitTransactionInput";
import { CommitTransactionOutput } from "../types/CommitTransactionOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/CommitTransactionInput";
export * from "../types/CommitTransactionOutput";
export * from "../types/CommitTransactionExceptionsUnion";

export class CommitTransactionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CommitTransactionInput,
      OutputTypesUnion,
      CommitTransactionOutput,
      RDSDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CommitTransaction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CommitTransactionInput,
    CommitTransactionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CommitTransactionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<CommitTransactionInput, CommitTransactionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CommitTransactionInput, CommitTransactionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
