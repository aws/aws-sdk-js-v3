import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAssociation } from "../model/CreateAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAssociationInput } from "../types/CreateAssociationInput";
import { CreateAssociationOutput } from "../types/CreateAssociationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateAssociationInput";
export * from "../types/CreateAssociationOutput";
export * from "../types/CreateAssociationExceptionsUnion";

export class CreateAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAssociationInput,
      OutputTypesUnion,
      CreateAssociationOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAssociationInput,
    CreateAssociationOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAssociationInput, CreateAssociationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAssociationInput, CreateAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
