import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDataRetention } from "../model/UpdateDataRetention";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDataRetentionInput } from "../types/UpdateDataRetentionInput";
import { UpdateDataRetentionOutput } from "../types/UpdateDataRetentionOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/UpdateDataRetentionInput";
export * from "../types/UpdateDataRetentionOutput";
export * from "../types/UpdateDataRetentionExceptionsUnion";

export class UpdateDataRetentionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDataRetentionInput,
      OutputTypesUnion,
      UpdateDataRetentionOutput,
      KinesisVideoResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDataRetention;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDataRetentionInput,
    UpdateDataRetentionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDataRetentionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDataRetentionInput,
    UpdateDataRetentionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDataRetentionInput, UpdateDataRetentionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
