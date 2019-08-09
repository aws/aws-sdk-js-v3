import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEnvironments } from "../model/ListEnvironments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEnvironmentsInput } from "../types/ListEnvironmentsInput";
import { ListEnvironmentsOutput } from "../types/ListEnvironmentsOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/ListEnvironmentsInput";
export * from "../types/ListEnvironmentsOutput";
export * from "../types/ListEnvironmentsExceptionsUnion";

export class ListEnvironmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEnvironmentsInput,
      OutputTypesUnion,
      ListEnvironmentsOutput,
      Cloud9ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEnvironmentsInput,
    ListEnvironmentsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEnvironmentsInput, ListEnvironmentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEnvironmentsInput, ListEnvironmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
