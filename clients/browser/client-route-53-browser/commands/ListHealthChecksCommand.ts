import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListHealthChecks } from "../model/ListHealthChecks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHealthChecksInput } from "../types/ListHealthChecksInput";
import { ListHealthChecksOutput } from "../types/ListHealthChecksOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListHealthChecksInput";
export * from "../types/ListHealthChecksOutput";
export * from "../types/ListHealthChecksExceptionsUnion";

export class ListHealthChecksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHealthChecksInput,
      OutputTypesUnion,
      ListHealthChecksOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ListHealthChecks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHealthChecksInput,
    ListHealthChecksOutput,
    Blob
  >();

  constructor(readonly input: ListHealthChecksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListHealthChecksInput, ListHealthChecksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListHealthChecksInput, ListHealthChecksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
