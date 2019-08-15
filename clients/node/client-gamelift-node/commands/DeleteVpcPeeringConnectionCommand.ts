import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVpcPeeringConnection } from "../model/operations/DeleteVpcPeeringConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcPeeringConnectionInput } from "../types/DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "../types/DeleteVpcPeeringConnectionOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteVpcPeeringConnectionInput";
export * from "../types/DeleteVpcPeeringConnectionOutput";
export * from "../types/DeleteVpcPeeringConnectionExceptionsUnion";

export class DeleteVpcPeeringConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcPeeringConnectionInput,
      OutputTypesUnion,
      DeleteVpcPeeringConnectionOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVpcPeeringConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcPeeringConnectionInput,
    DeleteVpcPeeringConnectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVpcPeeringConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcPeeringConnectionInput,
    DeleteVpcPeeringConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVpcPeeringConnectionInput,
        DeleteVpcPeeringConnectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
