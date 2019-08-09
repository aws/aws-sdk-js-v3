import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteKeyPair } from "../model/DeleteKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteKeyPairInput } from "../types/DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "../types/DeleteKeyPairOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
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
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteKeyPairInput,
    DeleteKeyPairOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
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
