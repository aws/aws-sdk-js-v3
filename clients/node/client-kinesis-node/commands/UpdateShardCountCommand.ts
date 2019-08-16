import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateShardCount } from "../model/operations/UpdateShardCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateShardCountInput } from "../types/UpdateShardCountInput";
import { UpdateShardCountOutput } from "../types/UpdateShardCountOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/UpdateShardCountInput";
export * from "../types/UpdateShardCountOutput";
export * from "../types/UpdateShardCountExceptionsUnion";

export class UpdateShardCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateShardCountInput,
      OutputTypesUnion,
      UpdateShardCountOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateShardCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateShardCountInput,
    UpdateShardCountOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateShardCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateShardCountInput, UpdateShardCountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateShardCountInput, UpdateShardCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
