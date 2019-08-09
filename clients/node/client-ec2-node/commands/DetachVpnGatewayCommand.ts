import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachVpnGateway } from "../model/DetachVpnGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachVpnGatewayInput } from "../types/DetachVpnGatewayInput";
import { DetachVpnGatewayOutput } from "../types/DetachVpnGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DetachVpnGatewayInput";
export * from "../types/DetachVpnGatewayOutput";
export * from "../types/DetachVpnGatewayExceptionsUnion";

export class DetachVpnGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachVpnGatewayInput,
      OutputTypesUnion,
      DetachVpnGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachVpnGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachVpnGatewayInput,
    DetachVpnGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachVpnGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachVpnGatewayInput, DetachVpnGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachVpnGatewayInput, DetachVpnGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
