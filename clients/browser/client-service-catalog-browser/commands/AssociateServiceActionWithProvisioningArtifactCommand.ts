import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateServiceActionWithProvisioningArtifact } from "../model/operations/AssociateServiceActionWithProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateServiceActionWithProvisioningArtifactInput } from "../types/AssociateServiceActionWithProvisioningArtifactInput";
import { AssociateServiceActionWithProvisioningArtifactOutput } from "../types/AssociateServiceActionWithProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AssociateServiceActionWithProvisioningArtifactInput";
export * from "../types/AssociateServiceActionWithProvisioningArtifactOutput";
export * from "../types/AssociateServiceActionWithProvisioningArtifactExceptionsUnion";

export class AssociateServiceActionWithProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateServiceActionWithProvisioningArtifactInput,
      OutputTypesUnion,
      AssociateServiceActionWithProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateServiceActionWithProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateServiceActionWithProvisioningArtifactInput,
    AssociateServiceActionWithProvisioningArtifactOutput,
    Blob
  >();

  constructor(
    readonly input: AssociateServiceActionWithProvisioningArtifactInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateServiceActionWithProvisioningArtifactInput,
    AssociateServiceActionWithProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateServiceActionWithProvisioningArtifactInput,
        AssociateServiceActionWithProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
