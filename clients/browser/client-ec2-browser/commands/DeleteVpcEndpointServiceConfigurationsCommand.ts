import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpcEndpointServiceConfigurations } from "../model/operations/DeleteVpcEndpointServiceConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcEndpointServiceConfigurationsInput } from "../types/DeleteVpcEndpointServiceConfigurationsInput";
import { DeleteVpcEndpointServiceConfigurationsOutput } from "../types/DeleteVpcEndpointServiceConfigurationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpcEndpointServiceConfigurationsInput";
export * from "../types/DeleteVpcEndpointServiceConfigurationsOutput";
export * from "../types/DeleteVpcEndpointServiceConfigurationsExceptionsUnion";

export class DeleteVpcEndpointServiceConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcEndpointServiceConfigurationsInput,
      OutputTypesUnion,
      DeleteVpcEndpointServiceConfigurationsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVpcEndpointServiceConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcEndpointServiceConfigurationsInput,
    DeleteVpcEndpointServiceConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: DeleteVpcEndpointServiceConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcEndpointServiceConfigurationsInput,
    DeleteVpcEndpointServiceConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVpcEndpointServiceConfigurationsInput,
        DeleteVpcEndpointServiceConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
