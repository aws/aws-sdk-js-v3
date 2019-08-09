import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetServiceSetting } from "../model/ResetServiceSetting";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetServiceSettingInput } from "../types/ResetServiceSettingInput";
import { ResetServiceSettingOutput } from "../types/ResetServiceSettingOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ResetServiceSettingInput";
export * from "../types/ResetServiceSettingOutput";
export * from "../types/ResetServiceSettingExceptionsUnion";

export class ResetServiceSettingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetServiceSettingInput,
      OutputTypesUnion,
      ResetServiceSettingOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResetServiceSetting;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetServiceSettingInput,
    ResetServiceSettingOutput,
    Uint8Array
  >();

  constructor(readonly input: ResetServiceSettingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetServiceSettingInput,
    ResetServiceSettingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetServiceSettingInput, ResetServiceSettingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
