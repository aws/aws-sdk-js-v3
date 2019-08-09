import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateCreatedArtifact } from "../model/AssociateCreatedArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateCreatedArtifactInput } from "../types/AssociateCreatedArtifactInput";
import { AssociateCreatedArtifactOutput } from "../types/AssociateCreatedArtifactOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/AssociateCreatedArtifactInput";
export * from "../types/AssociateCreatedArtifactOutput";
export * from "../types/AssociateCreatedArtifactExceptionsUnion";

export class AssociateCreatedArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateCreatedArtifactInput,
      OutputTypesUnion,
      AssociateCreatedArtifactOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateCreatedArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateCreatedArtifactInput,
    AssociateCreatedArtifactOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateCreatedArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateCreatedArtifactInput,
    AssociateCreatedArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateCreatedArtifactInput, AssociateCreatedArtifactOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
