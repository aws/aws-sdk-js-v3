import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListResolvers } from "../model/ListResolvers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolversInput } from "../types/ListResolversInput";
import { ListResolversOutput } from "../types/ListResolversOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListResolversInput";
export * from "../types/ListResolversOutput";
export * from "../types/ListResolversExceptionsUnion";

export class ListResolversCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolversInput,
      OutputTypesUnion,
      ListResolversOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListResolvers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolversInput,
    ListResolversOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListResolversInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListResolversInput, ListResolversOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResolversInput, ListResolversOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
