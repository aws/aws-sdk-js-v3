import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetQueueAttributes } from "../model/operations/GetQueueAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueueAttributesInput } from "../types/GetQueueAttributesInput";
import { GetQueueAttributesOutput } from "../types/GetQueueAttributesOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/GetQueueAttributesInput";
export * from "../types/GetQueueAttributesOutput";
export * from "../types/GetQueueAttributesExceptionsUnion";

export class GetQueueAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueueAttributesInput,
      OutputTypesUnion,
      GetQueueAttributesOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetQueueAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueueAttributesInput,
    GetQueueAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetQueueAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetQueueAttributesInput,
    GetQueueAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQueueAttributesInput, GetQueueAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
