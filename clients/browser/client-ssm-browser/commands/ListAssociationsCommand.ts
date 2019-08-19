import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssociations } from "../model/operations/ListAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociationsInput } from "../types/ListAssociationsInput";
import { ListAssociationsOutput } from "../types/ListAssociationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListAssociationsInput";
export * from "../types/ListAssociationsOutput";
export * from "../types/ListAssociationsExceptionsUnion";

export class ListAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociationsInput,
      OutputTypesUnion,
      ListAssociationsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociationsInput,
    ListAssociationsOutput,
    Blob
  >();

  constructor(readonly input: ListAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAssociationsInput, ListAssociationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssociationsInput, ListAssociationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
