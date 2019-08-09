import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceActionsForProvisioningArtifact } from "../model/ListServiceActionsForProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServiceActionsForProvisioningArtifactInput } from "../types/ListServiceActionsForProvisioningArtifactInput";
import { ListServiceActionsForProvisioningArtifactOutput } from "../types/ListServiceActionsForProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListServiceActionsForProvisioningArtifactInput";
export * from "../types/ListServiceActionsForProvisioningArtifactOutput";
export * from "../types/ListServiceActionsForProvisioningArtifactExceptionsUnion";

export class ListServiceActionsForProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServiceActionsForProvisioningArtifactInput,
      OutputTypesUnion,
      ListServiceActionsForProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListServiceActionsForProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceActionsForProvisioningArtifactInput,
    ListServiceActionsForProvisioningArtifactOutput,
    Uint8Array
  >();

  constructor(readonly input: ListServiceActionsForProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServiceActionsForProvisioningArtifactInput,
    ListServiceActionsForProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListServiceActionsForProvisioningArtifactInput,
        ListServiceActionsForProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
