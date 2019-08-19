import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEventStream } from "../model/operations/PutEventStream";
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
      _stream.Readable
    > {
  readonly model = PutEventStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventStreamInput,
    PutEventStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEventStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEventStreamInput, PutEventStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEventStreamInput, PutEventStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
