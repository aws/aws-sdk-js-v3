import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpcPeeringAuthorization } from "../model/DeleteVpcPeeringAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcPeeringAuthorizationInput } from "../types/DeleteVpcPeeringAuthorizationInput";
import { DeleteVpcPeeringAuthorizationOutput } from "../types/DeleteVpcPeeringAuthorizationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteVpcPeeringAuthorizationInput";
export * from "../types/DeleteVpcPeeringAuthorizationOutput";
export * from "../types/DeleteVpcPeeringAuthorizationExceptionsUnion";

export class DeleteVpcPeeringAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcPeeringAuthorizationInput,
      OutputTypesUnion,
      DeleteVpcPeeringAuthorizationOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVpcPeeringAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcPeeringAuthorizationInput,
    DeleteVpcPeeringAuthorizationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVpcPeeringAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcPeeringAuthorizationInput,
    DeleteVpcPeeringAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVpcPeeringAuthorizationInput,
        DeleteVpcPeeringAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
