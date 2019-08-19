import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutAccountSetting } from "../model/operations/PutAccountSetting";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAccountSettingInput } from "../types/PutAccountSettingInput";
import { PutAccountSettingOutput } from "../types/PutAccountSettingOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/PutAccountSettingInput";
export * from "../types/PutAccountSettingOutput";
export * from "../types/PutAccountSettingExceptionsUnion";

export class PutAccountSettingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAccountSettingInput,
      OutputTypesUnion,
      PutAccountSettingOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = PutAccountSetting;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAccountSettingInput,
    PutAccountSettingOutput,
    Blob
  >();

  constructor(readonly input: PutAccountSettingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<PutAccountSettingInput, PutAccountSettingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAccountSettingInput, PutAccountSettingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
