import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProvisioningArtifacts } from "../model/operations/ListProvisioningArtifacts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProvisioningArtifactsInput } from "../types/ListProvisioningArtifactsInput";
import { ListProvisioningArtifactsOutput } from "../types/ListProvisioningArtifactsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListProvisioningArtifactsInput";
export * from "../types/ListProvisioningArtifactsOutput";
export * from "../types/ListProvisioningArtifactsExceptionsUnion";

export class ListProvisioningArtifactsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProvisioningArtifactsInput,
      OutputTypesUnion,
      ListProvisioningArtifactsOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListProvisioningArtifacts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProvisioningArtifactsInput,
    ListProvisioningArtifactsOutput,
    Blob
  >();

  constructor(readonly input: ListProvisioningArtifactsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProvisioningArtifactsInput,
    ListProvisioningArtifactsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
