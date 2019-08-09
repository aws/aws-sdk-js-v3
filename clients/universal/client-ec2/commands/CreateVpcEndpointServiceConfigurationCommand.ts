import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpcEndpointServiceConfiguration } from "../model/CreateVpcEndpointServiceConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcEndpointServiceConfigurationInput } from "../types/CreateVpcEndpointServiceConfigurationInput";
import { CreateVpcEndpointServiceConfigurationOutput } from "../types/CreateVpcEndpointServiceConfigurationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpcEndpointServiceConfigurationInput";
export * from "../types/CreateVpcEndpointServiceConfigurationOutput";
export * from "../types/CreateVpcEndpointServiceConfigurationExceptionsUnion";

export class CreateVpcEndpointServiceConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcEndpointServiceConfigurationInput,
      OutputTypesUnion,
      CreateVpcEndpointServiceConfigurationOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateVpcEndpointServiceConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcEndpointServiceConfigurationInput,
    CreateVpcEndpointServiceConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateVpcEndpointServiceConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpcEndpointServiceConfigurationInput,
    CreateVpcEndpointServiceConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateVpcEndpointServiceConfigurationInput,
        CreateVpcEndpointServiceConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
