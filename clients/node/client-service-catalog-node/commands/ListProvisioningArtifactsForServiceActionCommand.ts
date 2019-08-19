import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListProvisioningArtifactsForServiceAction } from "../model/operations/ListProvisioningArtifactsForServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProvisioningArtifactsForServiceActionInput } from "../types/ListProvisioningArtifactsForServiceActionInput";
import { ListProvisioningArtifactsForServiceActionOutput } from "../types/ListProvisioningArtifactsForServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListProvisioningArtifactsForServiceActionInput";
export * from "../types/ListProvisioningArtifactsForServiceActionOutput";
export * from "../types/ListProvisioningArtifactsForServiceActionExceptionsUnion";

export class ListProvisioningArtifactsForServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProvisioningArtifactsForServiceActionInput,
      OutputTypesUnion,
      ListProvisioningArtifactsForServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListProvisioningArtifactsForServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProvisioningArtifactsForServiceActionInput,
    ListProvisioningArtifactsForServiceActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListProvisioningArtifactsForServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProvisioningArtifactsForServiceActionInput,
    ListProvisioningArtifactsForServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListProvisioningArtifactsForServiceActionInput,
        ListProvisioningArtifactsForServiceActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
