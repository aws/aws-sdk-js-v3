import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptVpcPeeringConnection } from "../model/AcceptVpcPeeringConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptVpcPeeringConnectionInput } from "../types/AcceptVpcPeeringConnectionInput";
import { AcceptVpcPeeringConnectionOutput } from "../types/AcceptVpcPeeringConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AcceptVpcPeeringConnectionInput";
export * from "../types/AcceptVpcPeeringConnectionOutput";
export * from "../types/AcceptVpcPeeringConnectionExceptionsUnion";

export class AcceptVpcPeeringConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptVpcPeeringConnectionInput,
      OutputTypesUnion,
      AcceptVpcPeeringConnectionOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptVpcPeeringConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptVpcPeeringConnectionInput,
    AcceptVpcPeeringConnectionOutput,
    Uint8Array
  >();

  constructor(readonly input: AcceptVpcPeeringConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptVpcPeeringConnectionInput,
    AcceptVpcPeeringConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptVpcPeeringConnectionInput,
        AcceptVpcPeeringConnectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
