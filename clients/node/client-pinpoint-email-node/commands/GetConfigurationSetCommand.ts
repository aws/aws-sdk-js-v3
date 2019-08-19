import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConfigurationSet } from "../model/operations/GetConfigurationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConfigurationSetInput } from "../types/GetConfigurationSetInput";
import { GetConfigurationSetOutput } from "../types/GetConfigurationSetOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetConfigurationSetInput";
export * from "../types/GetConfigurationSetOutput";
export * from "../types/GetConfigurationSetExceptionsUnion";

export class GetConfigurationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConfigurationSetInput,
      OutputTypesUnion,
      GetConfigurationSetOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConfigurationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConfigurationSetInput,
    GetConfigurationSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConfigurationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConfigurationSetInput,
    GetConfigurationSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConfigurationSetInput, GetConfigurationSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
