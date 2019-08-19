import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDomainAssociation } from "../model/operations/CreateDomainAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDomainAssociationInput } from "../types/CreateDomainAssociationInput";
import { CreateDomainAssociationOutput } from "../types/CreateDomainAssociationOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/CreateDomainAssociationInput";
export * from "../types/CreateDomainAssociationOutput";
export * from "../types/CreateDomainAssociationExceptionsUnion";

export class CreateDomainAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDomainAssociationInput,
      OutputTypesUnion,
      CreateDomainAssociationOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDomainAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDomainAssociationInput,
    CreateDomainAssociationOutput,
    Blob
  >();

  constructor(readonly input: CreateDomainAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDomainAssociationInput,
    CreateDomainAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDomainAssociationInput, CreateDomainAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
