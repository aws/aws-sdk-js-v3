import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOperations } from "../model/ListOperations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOperationsInput } from "../types/ListOperationsInput";
import { ListOperationsOutput } from "../types/ListOperationsOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/ListOperationsInput";
export * from "../types/ListOperationsOutput";
export * from "../types/ListOperationsExceptionsUnion";

export class ListOperationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOperationsInput,
      OutputTypesUnion,
      ListOperationsOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = ListOperations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOperationsInput,
    ListOperationsOutput,
    Blob
  >();

  constructor(readonly input: ListOperationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListOperationsInput, ListOperationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOperationsInput, ListOperationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
