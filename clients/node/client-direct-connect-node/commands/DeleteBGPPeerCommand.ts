import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBGPPeer } from "../model/operations/DeleteBGPPeer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBGPPeerInput } from "../types/DeleteBGPPeerInput";
import { DeleteBGPPeerOutput } from "../types/DeleteBGPPeerOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteBGPPeerInput";
export * from "../types/DeleteBGPPeerOutput";
export * from "../types/DeleteBGPPeerExceptionsUnion";

export class DeleteBGPPeerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBGPPeerInput,
      OutputTypesUnion,
      DeleteBGPPeerOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBGPPeer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBGPPeerInput,
    DeleteBGPPeerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBGPPeerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBGPPeerInput, DeleteBGPPeerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBGPPeerInput, DeleteBGPPeerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
