import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSMBSettings } from "../model/DescribeSMBSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSMBSettingsInput } from "../types/DescribeSMBSettingsInput";
import { DescribeSMBSettingsOutput } from "../types/DescribeSMBSettingsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeSMBSettingsInput";
export * from "../types/DescribeSMBSettingsOutput";
export * from "../types/DescribeSMBSettingsExceptionsUnion";

export class DescribeSMBSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSMBSettingsInput,
      OutputTypesUnion,
      DescribeSMBSettingsOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSMBSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSMBSettingsInput,
    DescribeSMBSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSMBSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSMBSettingsInput,
    DescribeSMBSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSMBSettingsInput, DescribeSMBSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
