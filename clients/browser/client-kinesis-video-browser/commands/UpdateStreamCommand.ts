import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStream } from "../model/UpdateStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStreamInput } from "../types/UpdateStreamInput";
import { UpdateStreamOutput } from "../types/UpdateStreamOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/UpdateStreamInput";
export * from "../types/UpdateStreamOutput";
export * from "../types/UpdateStreamExceptionsUnion";

export class UpdateStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStreamInput,
      OutputTypesUnion,
      UpdateStreamOutput,
      KinesisVideoResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStreamInput,
    UpdateStreamOutput,
    Blob
  >();

  constructor(readonly input: UpdateStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStreamInput, UpdateStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStreamInput, UpdateStreamOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
