import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateServiceActionFromProvisioningArtifact } from "../model/operations/DisassociateServiceActionFromProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateServiceActionFromProvisioningArtifactInput } from "../types/DisassociateServiceActionFromProvisioningArtifactInput";
import { DisassociateServiceActionFromProvisioningArtifactOutput } from "../types/DisassociateServiceActionFromProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisassociateServiceActionFromProvisioningArtifactInput";
export * from "../types/DisassociateServiceActionFromProvisioningArtifactOutput";
export * from "../types/DisassociateServiceActionFromProvisioningArtifactExceptionsUnion";

export class DisassociateServiceActionFromProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateServiceActionFromProvisioningArtifactInput,
      OutputTypesUnion,
      DisassociateServiceActionFromProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateServiceActionFromProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateServiceActionFromProvisioningArtifactInput,
    DisassociateServiceActionFromProvisioningArtifactOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: DisassociateServiceActionFromProvisioningArtifactInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateServiceActionFromProvisioningArtifactInput,
    DisassociateServiceActionFromProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateServiceActionFromProvisioningArtifactInput,
        DisassociateServiceActionFromProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
