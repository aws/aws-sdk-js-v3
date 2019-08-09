import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetIpAddressType } from "../model/SetIpAddressType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIpAddressTypeInput } from "../types/SetIpAddressTypeInput";
import { SetIpAddressTypeOutput } from "../types/SetIpAddressTypeOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/SetIpAddressTypeInput";
export * from "../types/SetIpAddressTypeOutput";
export * from "../types/SetIpAddressTypeExceptionsUnion";

export class SetIpAddressTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIpAddressTypeInput,
      OutputTypesUnion,
      SetIpAddressTypeOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetIpAddressType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIpAddressTypeInput,
    SetIpAddressTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetIpAddressTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<SetIpAddressTypeInput, SetIpAddressTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetIpAddressTypeInput, SetIpAddressTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
