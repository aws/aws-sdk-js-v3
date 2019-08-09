import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TerminateClientVpnConnections } from "../model/TerminateClientVpnConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateClientVpnConnectionsInput } from "../types/TerminateClientVpnConnectionsInput";
import { TerminateClientVpnConnectionsOutput } from "../types/TerminateClientVpnConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/TerminateClientVpnConnectionsInput";
export * from "../types/TerminateClientVpnConnectionsOutput";
export * from "../types/TerminateClientVpnConnectionsExceptionsUnion";

export class TerminateClientVpnConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateClientVpnConnectionsInput,
      OutputTypesUnion,
      TerminateClientVpnConnectionsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TerminateClientVpnConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateClientVpnConnectionsInput,
    TerminateClientVpnConnectionsOutput,
    Uint8Array
  >();

  constructor(readonly input: TerminateClientVpnConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateClientVpnConnectionsInput,
    TerminateClientVpnConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        TerminateClientVpnConnectionsInput,
        TerminateClientVpnConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
