import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEventStream } from "../model/GetEventStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEventStreamInput } from "../types/GetEventStreamInput";
import { GetEventStreamOutput } from "../types/GetEventStreamOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetEventStreamInput";
export * from "../types/GetEventStreamOutput";
export * from "../types/GetEventStreamExceptionsUnion";

export class GetEventStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEventStreamInput,
      OutputTypesUnion,
      GetEventStreamOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetEventStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEventStreamInput,
    GetEventStreamOutput,
    Uint8Array
  >();

  constructor(readonly input: GetEventStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEventStreamInput, GetEventStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEventStreamInput, GetEventStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
