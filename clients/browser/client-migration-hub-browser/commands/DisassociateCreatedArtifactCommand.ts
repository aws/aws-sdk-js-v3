import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateCreatedArtifact } from "../model/operations/DisassociateCreatedArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateCreatedArtifactInput } from "../types/DisassociateCreatedArtifactInput";
import { DisassociateCreatedArtifactOutput } from "../types/DisassociateCreatedArtifactOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/DisassociateCreatedArtifactInput";
export * from "../types/DisassociateCreatedArtifactOutput";
export * from "../types/DisassociateCreatedArtifactExceptionsUnion";

export class DisassociateCreatedArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateCreatedArtifactInput,
      OutputTypesUnion,
      DisassociateCreatedArtifactOutput,
      MigrationHubResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateCreatedArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateCreatedArtifactInput,
    DisassociateCreatedArtifactOutput,
    Blob
  >();

  constructor(readonly input: DisassociateCreatedArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateCreatedArtifactInput,
    DisassociateCreatedArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateCreatedArtifactInput,
        DisassociateCreatedArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
