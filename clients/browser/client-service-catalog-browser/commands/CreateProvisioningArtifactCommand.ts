import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateProvisioningArtifact } from "../model/CreateProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProvisioningArtifactInput } from "../types/CreateProvisioningArtifactInput";
import { CreateProvisioningArtifactOutput } from "../types/CreateProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateProvisioningArtifactInput";
export * from "../types/CreateProvisioningArtifactOutput";
export * from "../types/CreateProvisioningArtifactExceptionsUnion";

export class CreateProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProvisioningArtifactInput,
      OutputTypesUnion,
      CreateProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = CreateProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProvisioningArtifactInput,
    CreateProvisioningArtifactOutput,
    Blob
  >();

  constructor(readonly input: CreateProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateProvisioningArtifactInput,
    CreateProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateProvisioningArtifactInput,
        CreateProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
