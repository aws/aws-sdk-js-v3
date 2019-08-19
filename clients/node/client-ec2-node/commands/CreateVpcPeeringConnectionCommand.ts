import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVpcPeeringConnection } from "../model/operations/CreateVpcPeeringConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcPeeringConnectionInput } from "../types/CreateVpcPeeringConnectionInput";
import { CreateVpcPeeringConnectionOutput } from "../types/CreateVpcPeeringConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpcPeeringConnectionInput";
export * from "../types/CreateVpcPeeringConnectionOutput";
export * from "../types/CreateVpcPeeringConnectionExceptionsUnion";

export class CreateVpcPeeringConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcPeeringConnectionInput,
      OutputTypesUnion,
      CreateVpcPeeringConnectionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVpcPeeringConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcPeeringConnectionInput,
    CreateVpcPeeringConnectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVpcPeeringConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpcPeeringConnectionInput,
    CreateVpcPeeringConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateVpcPeeringConnectionInput,
        CreateVpcPeeringConnectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
