import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyVpcEndpointServicePermissions } from "../model/ModifyVpcEndpointServicePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcEndpointServicePermissionsInput } from "../types/ModifyVpcEndpointServicePermissionsInput";
import { ModifyVpcEndpointServicePermissionsOutput } from "../types/ModifyVpcEndpointServicePermissionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcEndpointServicePermissionsInput";
export * from "../types/ModifyVpcEndpointServicePermissionsOutput";
export * from "../types/ModifyVpcEndpointServicePermissionsExceptionsUnion";

export class ModifyVpcEndpointServicePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcEndpointServicePermissionsInput,
      OutputTypesUnion,
      ModifyVpcEndpointServicePermissionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyVpcEndpointServicePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcEndpointServicePermissionsInput,
    ModifyVpcEndpointServicePermissionsOutput,
    Blob
  >();

  constructor(readonly input: ModifyVpcEndpointServicePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpcEndpointServicePermissionsInput,
    ModifyVpcEndpointServicePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyVpcEndpointServicePermissionsInput,
        ModifyVpcEndpointServicePermissionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
