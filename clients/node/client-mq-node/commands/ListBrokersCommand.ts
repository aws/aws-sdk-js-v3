import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBrokers } from "../model/ListBrokers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBrokersInput } from "../types/ListBrokersInput";
import { ListBrokersOutput } from "../types/ListBrokersOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/ListBrokersInput";
export * from "../types/ListBrokersOutput";
export * from "../types/ListBrokersExceptionsUnion";

export class ListBrokersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBrokersInput,
      OutputTypesUnion,
      ListBrokersOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBrokers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBrokersInput,
    ListBrokersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBrokersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBrokersInput, ListBrokersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBrokersInput, ListBrokersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
