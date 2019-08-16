import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergeShards } from "../model/operations/MergeShards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergeShardsInput } from "../types/MergeShardsInput";
import { MergeShardsOutput } from "../types/MergeShardsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/MergeShardsInput";
export * from "../types/MergeShardsOutput";
export * from "../types/MergeShardsExceptionsUnion";

export class MergeShardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergeShardsInput,
      OutputTypesUnion,
      MergeShardsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MergeShards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergeShardsInput,
    MergeShardsOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergeShardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<MergeShardsInput, MergeShardsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MergeShardsInput, MergeShardsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
