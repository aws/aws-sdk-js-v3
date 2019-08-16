import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListShards } from "../model/operations/ListShards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListShardsInput } from "../types/ListShardsInput";
import { ListShardsOutput } from "../types/ListShardsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/ListShardsInput";
export * from "../types/ListShardsOutput";
export * from "../types/ListShardsExceptionsUnion";

export class ListShardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListShardsInput,
      OutputTypesUnion,
      ListShardsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListShards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListShardsInput,
    ListShardsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListShardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<ListShardsInput, ListShardsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListShardsInput, ListShardsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
