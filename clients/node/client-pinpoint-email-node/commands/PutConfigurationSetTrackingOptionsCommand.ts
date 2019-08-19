import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutConfigurationSetTrackingOptions } from "../model/operations/PutConfigurationSetTrackingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationSetTrackingOptionsInput } from "../types/PutConfigurationSetTrackingOptionsInput";
import { PutConfigurationSetTrackingOptionsOutput } from "../types/PutConfigurationSetTrackingOptionsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutConfigurationSetTrackingOptionsInput";
export * from "../types/PutConfigurationSetTrackingOptionsOutput";
export * from "../types/PutConfigurationSetTrackingOptionsExceptionsUnion";

export class PutConfigurationSetTrackingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationSetTrackingOptionsInput,
      OutputTypesUnion,
      PutConfigurationSetTrackingOptionsOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutConfigurationSetTrackingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationSetTrackingOptionsInput,
    PutConfigurationSetTrackingOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutConfigurationSetTrackingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationSetTrackingOptionsInput,
    PutConfigurationSetTrackingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutConfigurationSetTrackingOptionsInput,
        PutConfigurationSetTrackingOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
