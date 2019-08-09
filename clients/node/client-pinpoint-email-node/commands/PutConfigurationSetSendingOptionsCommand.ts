import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutConfigurationSetSendingOptions } from "../model/PutConfigurationSetSendingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationSetSendingOptionsInput } from "../types/PutConfigurationSetSendingOptionsInput";
import { PutConfigurationSetSendingOptionsOutput } from "../types/PutConfigurationSetSendingOptionsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutConfigurationSetSendingOptionsInput";
export * from "../types/PutConfigurationSetSendingOptionsOutput";
export * from "../types/PutConfigurationSetSendingOptionsExceptionsUnion";

export class PutConfigurationSetSendingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationSetSendingOptionsInput,
      OutputTypesUnion,
      PutConfigurationSetSendingOptionsOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutConfigurationSetSendingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationSetSendingOptionsInput,
    PutConfigurationSetSendingOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutConfigurationSetSendingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationSetSendingOptionsInput,
    PutConfigurationSetSendingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutConfigurationSetSendingOptionsInput,
        PutConfigurationSetSendingOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
