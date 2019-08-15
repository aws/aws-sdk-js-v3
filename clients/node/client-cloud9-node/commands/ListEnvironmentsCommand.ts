import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEnvironments } from "../model/operations/ListEnvironments";
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
      _stream.Readable
    > {
  readonly model = ListEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEnvironmentsInput,
    ListEnvironmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
