import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchAssociateServiceActionWithProvisioningArtifact } from "../model/BatchAssociateServiceActionWithProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchAssociateServiceActionWithProvisioningArtifactInput } from "../types/BatchAssociateServiceActionWithProvisioningArtifactInput";
import { BatchAssociateServiceActionWithProvisioningArtifactOutput } from "../types/BatchAssociateServiceActionWithProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/BatchAssociateServiceActionWithProvisioningArtifactInput";
export * from "../types/BatchAssociateServiceActionWithProvisioningArtifactOutput";
export * from "../types/BatchAssociateServiceActionWithProvisioningArtifactExceptionsUnion";

export class BatchAssociateServiceActionWithProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchAssociateServiceActionWithProvisioningArtifactInput,
      OutputTypesUnion,
      BatchAssociateServiceActionWithProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchAssociateServiceActionWithProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchAssociateServiceActionWithProvisioningArtifactInput,
    BatchAssociateServiceActionWithProvisioningArtifactOutput,
    Uint8Array
  >();

  constructor(
    readonly input: BatchAssociateServiceActionWithProvisioningArtifactInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchAssociateServiceActionWithProvisioningArtifactInput,
    BatchAssociateServiceActionWithProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchAssociateServiceActionWithProvisioningArtifactInput,
        BatchAssociateServiceActionWithProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
