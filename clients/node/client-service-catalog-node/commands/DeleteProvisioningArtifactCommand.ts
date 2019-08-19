import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteProvisioningArtifact } from "../model/operations/DeleteProvisioningArtifact";
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
      _stream.Readable
    > {
  readonly model = DeleteProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProvisioningArtifactInput,
    DeleteProvisioningArtifactOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
