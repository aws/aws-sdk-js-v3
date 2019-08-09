import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNode } from "../model/DeleteNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNodeInput } from "../types/DeleteNodeInput";
import { DeleteNodeOutput } from "../types/DeleteNodeOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/DeleteNodeInput";
export * from "../types/DeleteNodeOutput";
export * from "../types/DeleteNodeExceptionsUnion";

export class DeleteNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNodeInput,
      OutputTypesUnion,
      DeleteNodeOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNodeInput,
    DeleteNodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteNodeInput, DeleteNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNodeInput, DeleteNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
