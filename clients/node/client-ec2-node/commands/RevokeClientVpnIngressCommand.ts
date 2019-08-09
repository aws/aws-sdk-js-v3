import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeClientVpnIngress } from "../model/RevokeClientVpnIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeClientVpnIngressInput } from "../types/RevokeClientVpnIngressInput";
import { RevokeClientVpnIngressOutput } from "../types/RevokeClientVpnIngressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RevokeClientVpnIngressInput";
export * from "../types/RevokeClientVpnIngressOutput";
export * from "../types/RevokeClientVpnIngressExceptionsUnion";

export class RevokeClientVpnIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeClientVpnIngressInput,
      OutputTypesUnion,
      RevokeClientVpnIngressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeClientVpnIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeClientVpnIngressInput,
    RevokeClientVpnIngressOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeClientVpnIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeClientVpnIngressInput,
    RevokeClientVpnIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeClientVpnIngressInput, RevokeClientVpnIngressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
