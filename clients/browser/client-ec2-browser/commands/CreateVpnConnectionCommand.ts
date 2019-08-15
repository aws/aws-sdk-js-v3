import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpnConnection } from "../model/operations/CreateVpnConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpnConnectionInput } from "../types/CreateVpnConnectionInput";
import { CreateVpnConnectionOutput } from "../types/CreateVpnConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpnConnectionInput";
export * from "../types/CreateVpnConnectionOutput";
export * from "../types/CreateVpnConnectionExceptionsUnion";

export class CreateVpnConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpnConnectionInput,
      OutputTypesUnion,
      CreateVpnConnectionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVpnConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpnConnectionInput,
    CreateVpnConnectionOutput,
    Blob
  >();

  constructor(readonly input: CreateVpnConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpnConnectionInput,
    CreateVpnConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpnConnectionInput, CreateVpnConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
