import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PeerVpc } from "../model/PeerVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PeerVpcInput } from "../types/PeerVpcInput";
import { PeerVpcOutput } from "../types/PeerVpcOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/PeerVpcInput";
export * from "../types/PeerVpcOutput";
export * from "../types/PeerVpcExceptionsUnion";

export class PeerVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PeerVpcInput,
      OutputTypesUnion,
      PeerVpcOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PeerVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PeerVpcInput,
    PeerVpcOutput,
    Uint8Array
  >();

  constructor(readonly input: PeerVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<PeerVpcInput, PeerVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PeerVpcInput, PeerVpcOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
