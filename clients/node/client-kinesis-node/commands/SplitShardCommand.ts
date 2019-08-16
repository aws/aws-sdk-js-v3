import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SplitShard } from "../model/operations/SplitShard";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SplitShardInput } from "../types/SplitShardInput";
import { SplitShardOutput } from "../types/SplitShardOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/SplitShardInput";
export * from "../types/SplitShardOutput";
export * from "../types/SplitShardExceptionsUnion";

export class SplitShardCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SplitShardInput,
      OutputTypesUnion,
      SplitShardOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SplitShard;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SplitShardInput,
    SplitShardOutput,
    _stream.Readable
  >();

  constructor(readonly input: SplitShardInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<SplitShardInput, SplitShardOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SplitShardInput, SplitShardOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
