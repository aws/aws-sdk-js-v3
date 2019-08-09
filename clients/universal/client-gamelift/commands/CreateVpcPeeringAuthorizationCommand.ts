import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpcPeeringAuthorization } from "../model/CreateVpcPeeringAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcPeeringAuthorizationInput } from "../types/CreateVpcPeeringAuthorizationInput";
import { CreateVpcPeeringAuthorizationOutput } from "../types/CreateVpcPeeringAuthorizationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateVpcPeeringAuthorizationInput";
export * from "../types/CreateVpcPeeringAuthorizationOutput";
export * from "../types/CreateVpcPeeringAuthorizationExceptionsUnion";

export class CreateVpcPeeringAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcPeeringAuthorizationInput,
      OutputTypesUnion,
      CreateVpcPeeringAuthorizationOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateVpcPeeringAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcPeeringAuthorizationInput,
    CreateVpcPeeringAuthorizationOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateVpcPeeringAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpcPeeringAuthorizationInput,
    CreateVpcPeeringAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateVpcPeeringAuthorizationInput,
        CreateVpcPeeringAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
