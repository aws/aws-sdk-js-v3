import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDomainAssociations } from "../model/operations/ListDomainAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDomainAssociationsInput } from "../types/ListDomainAssociationsInput";
import { ListDomainAssociationsOutput } from "../types/ListDomainAssociationsOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/ListDomainAssociationsInput";
export * from "../types/ListDomainAssociationsOutput";
export * from "../types/ListDomainAssociationsExceptionsUnion";

export class ListDomainAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDomainAssociationsInput,
      OutputTypesUnion,
      ListDomainAssociationsOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = ListDomainAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDomainAssociationsInput,
    ListDomainAssociationsOutput,
    Blob
  >();

  constructor(readonly input: ListDomainAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDomainAssociationsInput,
    ListDomainAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDomainAssociationsInput, ListDomainAssociationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
