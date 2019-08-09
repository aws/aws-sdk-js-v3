import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteProvisioningArtifact } from "../model/DeleteProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProvisioningArtifactInput } from "../types/DeleteProvisioningArtifactInput";
import { DeleteProvisioningArtifactOutput } from "../types/DeleteProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteProvisioningArtifactInput";
export * from "../types/DeleteProvisioningArtifactOutput";
export * from "../types/DeleteProvisioningArtifactExceptionsUnion";

export class DeleteProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProvisioningArtifactInput,
      OutputTypesUnion,
      DeleteProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProvisioningArtifactInput,
    DeleteProvisioningArtifactOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteProvisioningArtifactInput,
    DeleteProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteProvisioningArtifactInput,
        DeleteProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
