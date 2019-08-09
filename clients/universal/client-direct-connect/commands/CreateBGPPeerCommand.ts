import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBGPPeer } from "../model/CreateBGPPeer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBGPPeerInput } from "../types/CreateBGPPeerInput";
import { CreateBGPPeerOutput } from "../types/CreateBGPPeerOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateBGPPeerInput";
export * from "../types/CreateBGPPeerOutput";
export * from "../types/CreateBGPPeerExceptionsUnion";

export class CreateBGPPeerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBGPPeerInput,
      OutputTypesUnion,
      CreateBGPPeerOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateBGPPeer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBGPPeerInput,
    CreateBGPPeerOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateBGPPeerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBGPPeerInput, CreateBGPPeerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBGPPeerInput, CreateBGPPeerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
