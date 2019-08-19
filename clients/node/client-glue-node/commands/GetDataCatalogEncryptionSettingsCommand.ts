import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDataCatalogEncryptionSettings } from "../model/operations/GetDataCatalogEncryptionSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataCatalogEncryptionSettingsInput } from "../types/GetDataCatalogEncryptionSettingsInput";
import { GetDataCatalogEncryptionSettingsOutput } from "../types/GetDataCatalogEncryptionSettingsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDataCatalogEncryptionSettingsInput";
export * from "../types/GetDataCatalogEncryptionSettingsOutput";
export * from "../types/GetDataCatalogEncryptionSettingsExceptionsUnion";

export class GetDataCatalogEncryptionSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataCatalogEncryptionSettingsInput,
      OutputTypesUnion,
      GetDataCatalogEncryptionSettingsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDataCatalogEncryptionSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataCatalogEncryptionSettingsInput,
    GetDataCatalogEncryptionSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDataCatalogEncryptionSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDataCatalogEncryptionSettingsInput,
    GetDataCatalogEncryptionSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDataCatalogEncryptionSettingsInput,
        GetDataCatalogEncryptionSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
