import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePublicKey } from "../model/operations/DeletePublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePublicKeyInput } from "../types/DeletePublicKeyInput";
import { DeletePublicKeyOutput } from "../types/DeletePublicKeyOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeletePublicKeyInput";
export * from "../types/DeletePublicKeyOutput";
export * from "../types/DeletePublicKeyExceptionsUnion";

export class DeletePublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePublicKeyInput,
      OutputTypesUnion,
      DeletePublicKeyOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePublicKeyInput,
    DeletePublicKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePublicKeyInput, DeletePublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePublicKeyInput, DeletePublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
