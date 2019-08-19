import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutAccountSettingDefault } from "../model/operations/PutAccountSettingDefault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAccountSettingDefaultInput } from "../types/PutAccountSettingDefaultInput";
import { PutAccountSettingDefaultOutput } from "../types/PutAccountSettingDefaultOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/PutAccountSettingDefaultInput";
export * from "../types/PutAccountSettingDefaultOutput";
export * from "../types/PutAccountSettingDefaultExceptionsUnion";

export class PutAccountSettingDefaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAccountSettingDefaultInput,
      OutputTypesUnion,
      PutAccountSettingDefaultOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = PutAccountSettingDefault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAccountSettingDefaultInput,
    PutAccountSettingDefaultOutput,
    Blob
  >();

  constructor(readonly input: PutAccountSettingDefaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAccountSettingDefaultInput,
    PutAccountSettingDefaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAccountSettingDefaultInput, PutAccountSettingDefaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
