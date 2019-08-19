import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteKeyPair } from "../model/operations/DeleteKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteKeyPairInput } from "../types/DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "../types/DeleteKeyPairOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteKeyPairInput";
export * from "../types/DeleteKeyPairOutput";
export * from "../types/DeleteKeyPairExceptionsUnion";

export class DeleteKeyPairCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteKeyPairInput,
      OutputTypesUnion,
      DeleteKeyPairOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteKeyPairInput,
    DeleteKeyPairOutput,
    Blob
  >();

  constructor(readonly input: DeleteKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteKeyPairInput, DeleteKeyPairOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteKeyPairInput, DeleteKeyPairOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
