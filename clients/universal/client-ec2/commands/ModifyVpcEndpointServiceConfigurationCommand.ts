import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyVpcEndpointServiceConfiguration } from "../model/ModifyVpcEndpointServiceConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcEndpointServiceConfigurationInput } from "../types/ModifyVpcEndpointServiceConfigurationInput";
import { ModifyVpcEndpointServiceConfigurationOutput } from "../types/ModifyVpcEndpointServiceConfigurationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcEndpointServiceConfigurationInput";
export * from "../types/ModifyVpcEndpointServiceConfigurationOutput";
export * from "../types/ModifyVpcEndpointServiceConfigurationExceptionsUnion";

export class ModifyVpcEndpointServiceConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcEndpointServiceConfigurationInput,
      OutputTypesUnion,
      ModifyVpcEndpointServiceConfigurationOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyVpcEndpointServiceConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcEndpointServiceConfigurationInput,
    ModifyVpcEndpointServiceConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyVpcEndpointServiceConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpcEndpointServiceConfigurationInput,
    ModifyVpcEndpointServiceConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyVpcEndpointServiceConfigurationInput,
        ModifyVpcEndpointServiceConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
