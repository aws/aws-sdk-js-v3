import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccountSettings } from "../model/operations/GetAccountSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountSettingsInput } from "../types/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "../types/GetAccountSettingsOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetAccountSettingsInput";
export * from "../types/GetAccountSettingsOutput";
export * from "../types/GetAccountSettingsExceptionsUnion";

export class GetAccountSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountSettingsInput,
      OutputTypesUnion,
      GetAccountSettingsOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccountSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountSettingsInput,
    GetAccountSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccountSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAccountSettingsInput,
    GetAccountSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountSettingsInput, GetAccountSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
