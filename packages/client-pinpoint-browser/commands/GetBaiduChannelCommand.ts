import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBaiduChannel } from "../model/GetBaiduChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBaiduChannelInput } from "../types/GetBaiduChannelInput";
import { GetBaiduChannelOutput } from "../types/GetBaiduChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetBaiduChannelInput";
export * from "../types/GetBaiduChannelOutput";
export * from "../types/GetBaiduChannelExceptionsUnion";

export class GetBaiduChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBaiduChannelInput,
      OutputTypesUnion,
      GetBaiduChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBaiduChannelInput,
    GetBaiduChannelOutput,
    Blob
  >();

  constructor(readonly input: GetBaiduChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBaiduChannelInput, GetBaiduChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetBaiduChannel
    };

    return stack.resolve(
      handler<GetBaiduChannelInput, GetBaiduChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
