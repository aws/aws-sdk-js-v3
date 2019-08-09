import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceSetting } from "../model/GetServiceSetting";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceSettingInput } from "../types/GetServiceSettingInput";
import { GetServiceSettingOutput } from "../types/GetServiceSettingOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetServiceSettingInput";
export * from "../types/GetServiceSettingOutput";
export * from "../types/GetServiceSettingExceptionsUnion";

export class GetServiceSettingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceSettingInput,
      OutputTypesUnion,
      GetServiceSettingOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetServiceSetting;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceSettingInput,
    GetServiceSettingOutput,
    Uint8Array
  >();

  constructor(readonly input: GetServiceSettingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetServiceSettingInput, GetServiceSettingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServiceSettingInput, GetServiceSettingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
