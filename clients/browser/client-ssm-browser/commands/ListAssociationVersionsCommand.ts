import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssociationVersions } from "../model/operations/ListAssociationVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociationVersionsInput } from "../types/ListAssociationVersionsInput";
import { ListAssociationVersionsOutput } from "../types/ListAssociationVersionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListAssociationVersionsInput";
export * from "../types/ListAssociationVersionsOutput";
export * from "../types/ListAssociationVersionsExceptionsUnion";

export class ListAssociationVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociationVersionsInput,
      OutputTypesUnion,
      ListAssociationVersionsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssociationVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociationVersionsInput,
    ListAssociationVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListAssociationVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssociationVersionsInput,
    ListAssociationVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssociationVersionsInput, ListAssociationVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
