import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateProvisioningArtifact } from "../model/operations/UpdateProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProvisioningArtifactInput } from "../types/UpdateProvisioningArtifactInput";
import { UpdateProvisioningArtifactOutput } from "../types/UpdateProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateProvisioningArtifactInput";
export * from "../types/UpdateProvisioningArtifactOutput";
export * from "../types/UpdateProvisioningArtifactExceptionsUnion";

export class UpdateProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProvisioningArtifactInput,
      OutputTypesUnion,
      UpdateProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProvisioningArtifactInput,
    UpdateProvisioningArtifactOutput,
    Blob
  >();

  constructor(readonly input: UpdateProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateProvisioningArtifactInput,
    UpdateProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateProvisioningArtifactInput,
        UpdateProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
