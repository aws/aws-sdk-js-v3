import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutEventStream } from "../model/PutEventStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEventStreamInput } from "../types/PutEventStreamInput";
import { PutEventStreamOutput } from "../types/PutEventStreamOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/PutEventStreamInput";
export * from "../types/PutEventStreamOutput";
export * from "../types/PutEventStreamExceptionsUnion";

export class PutEventStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEventStreamInput,
      OutputTypesUnion,
      PutEventStreamOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventStreamInput,
    PutEventStreamOutput,
    Blob
  >();

  constructor(readonly input: PutEventStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEventStreamInput, PutEventStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: PutEventStream
    };

    return stack.resolve(
      handler<PutEventStreamInput, PutEventStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
