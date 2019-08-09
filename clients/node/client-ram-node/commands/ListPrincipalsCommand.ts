import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPrincipals } from "../model/ListPrincipals";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPrincipalsInput } from "../types/ListPrincipalsInput";
import { ListPrincipalsOutput } from "../types/ListPrincipalsOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/ListPrincipalsInput";
export * from "../types/ListPrincipalsOutput";
export * from "../types/ListPrincipalsExceptionsUnion";

export class ListPrincipalsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPrincipalsInput,
      OutputTypesUnion,
      ListPrincipalsOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPrincipals;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPrincipalsInput,
    ListPrincipalsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPrincipalsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPrincipalsInput, ListPrincipalsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPrincipalsInput, ListPrincipalsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
