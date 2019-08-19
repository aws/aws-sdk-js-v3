import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateServiceSetting } from "../model/operations/UpdateServiceSetting";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceSettingInput } from "../types/UpdateServiceSettingInput";
import { UpdateServiceSettingOutput } from "../types/UpdateServiceSettingOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateServiceSettingInput";
export * from "../types/UpdateServiceSettingOutput";
export * from "../types/UpdateServiceSettingExceptionsUnion";

export class UpdateServiceSettingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceSettingInput,
      OutputTypesUnion,
      UpdateServiceSettingOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateServiceSetting;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceSettingInput,
    UpdateServiceSettingOutput,
    Blob
  >();

  constructor(readonly input: UpdateServiceSettingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServiceSettingInput,
    UpdateServiceSettingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServiceSettingInput, UpdateServiceSettingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
