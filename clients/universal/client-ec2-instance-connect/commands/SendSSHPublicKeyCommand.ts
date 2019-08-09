import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendSSHPublicKey } from "../model/SendSSHPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendSSHPublicKeyInput } from "../types/SendSSHPublicKeyInput";
import { SendSSHPublicKeyOutput } from "../types/SendSSHPublicKeyOutput";
import { EC2InstanceConnectResolvedConfiguration } from "../EC2InstanceConnectConfiguration";
export * from "../types/SendSSHPublicKeyInput";
export * from "../types/SendSSHPublicKeyOutput";
export * from "../types/SendSSHPublicKeyExceptionsUnion";

export class SendSSHPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendSSHPublicKeyInput,
      OutputTypesUnion,
      SendSSHPublicKeyOutput,
      EC2InstanceConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SendSSHPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendSSHPublicKeyInput,
    SendSSHPublicKeyOutput,
    Uint8Array
  >();

  constructor(readonly input: SendSSHPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2InstanceConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<SendSSHPublicKeyInput, SendSSHPublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendSSHPublicKeyInput, SendSSHPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
