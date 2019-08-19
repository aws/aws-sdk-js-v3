import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPersonTracking } from "../model/operations/GetPersonTracking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPersonTrackingInput } from "../types/GetPersonTrackingInput";
import { GetPersonTrackingOutput } from "../types/GetPersonTrackingOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetPersonTrackingInput";
export * from "../types/GetPersonTrackingOutput";
export * from "../types/GetPersonTrackingExceptionsUnion";

export class GetPersonTrackingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPersonTrackingInput,
      OutputTypesUnion,
      GetPersonTrackingOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPersonTracking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPersonTrackingInput,
    GetPersonTrackingOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPersonTrackingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPersonTrackingInput, GetPersonTrackingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPersonTrackingInput, GetPersonTrackingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
