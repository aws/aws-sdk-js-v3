import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCustomKeyStore } from "../model/operations/DeleteCustomKeyStore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCustomKeyStoreInput } from "../types/DeleteCustomKeyStoreInput";
import { DeleteCustomKeyStoreOutput } from "../types/DeleteCustomKeyStoreOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/DeleteCustomKeyStoreInput";
export * from "../types/DeleteCustomKeyStoreOutput";
export * from "../types/DeleteCustomKeyStoreExceptionsUnion";

export class DeleteCustomKeyStoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCustomKeyStoreInput,
      OutputTypesUnion,
      DeleteCustomKeyStoreOutput,
      KMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCustomKeyStore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCustomKeyStoreInput,
    DeleteCustomKeyStoreOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCustomKeyStoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCustomKeyStoreInput,
    DeleteCustomKeyStoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCustomKeyStoreInput, DeleteCustomKeyStoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
