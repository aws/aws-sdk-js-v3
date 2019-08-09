import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachVpnGateway } from "../model/AttachVpnGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachVpnGatewayInput } from "../types/AttachVpnGatewayInput";
import { AttachVpnGatewayOutput } from "../types/AttachVpnGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AttachVpnGatewayInput";
export * from "../types/AttachVpnGatewayOutput";
export * from "../types/AttachVpnGatewayExceptionsUnion";

export class AttachVpnGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachVpnGatewayInput,
      OutputTypesUnion,
      AttachVpnGatewayOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachVpnGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachVpnGatewayInput,
    AttachVpnGatewayOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachVpnGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachVpnGatewayInput, AttachVpnGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachVpnGatewayInput, AttachVpnGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
