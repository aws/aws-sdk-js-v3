import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssociatedFleets } from "../model/ListAssociatedFleets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociatedFleetsInput } from "../types/ListAssociatedFleetsInput";
import { ListAssociatedFleetsOutput } from "../types/ListAssociatedFleetsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/ListAssociatedFleetsInput";
export * from "../types/ListAssociatedFleetsOutput";
export * from "../types/ListAssociatedFleetsExceptionsUnion";

export class ListAssociatedFleetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociatedFleetsInput,
      OutputTypesUnion,
      ListAssociatedFleetsOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssociatedFleets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociatedFleetsInput,
    ListAssociatedFleetsOutput,
    Blob
  >();

  constructor(readonly input: ListAssociatedFleetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssociatedFleetsInput,
    ListAssociatedFleetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssociatedFleetsInput, ListAssociatedFleetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
