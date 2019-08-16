import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetShardIterator } from "../model/operations/GetShardIterator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetShardIteratorInput } from "../types/GetShardIteratorInput";
import { GetShardIteratorOutput } from "../types/GetShardIteratorOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/GetShardIteratorInput";
export * from "../types/GetShardIteratorOutput";
export * from "../types/GetShardIteratorExceptionsUnion";

export class GetShardIteratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetShardIteratorInput,
      OutputTypesUnion,
      GetShardIteratorOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetShardIterator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetShardIteratorInput,
    GetShardIteratorOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetShardIteratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<GetShardIteratorInput, GetShardIteratorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetShardIteratorInput, GetShardIteratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
