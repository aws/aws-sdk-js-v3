import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAccountAliases } from "../model/operations/ListAccountAliases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAccountAliasesInput } from "../types/ListAccountAliasesInput";
import { ListAccountAliasesOutput } from "../types/ListAccountAliasesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListAccountAliasesInput";
export * from "../types/ListAccountAliasesOutput";
export * from "../types/ListAccountAliasesExceptionsUnion";

export class ListAccountAliasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAccountAliasesInput,
      OutputTypesUnion,
      ListAccountAliasesOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAccountAliases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAccountAliasesInput,
    ListAccountAliasesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAccountAliasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAccountAliasesInput,
    ListAccountAliasesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAccountAliasesInput, ListAccountAliasesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
