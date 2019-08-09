import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutDataCatalogEncryptionSettings } from "../model/PutDataCatalogEncryptionSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDataCatalogEncryptionSettingsInput } from "../types/PutDataCatalogEncryptionSettingsInput";
import { PutDataCatalogEncryptionSettingsOutput } from "../types/PutDataCatalogEncryptionSettingsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/PutDataCatalogEncryptionSettingsInput";
export * from "../types/PutDataCatalogEncryptionSettingsOutput";
export * from "../types/PutDataCatalogEncryptionSettingsExceptionsUnion";

export class PutDataCatalogEncryptionSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDataCatalogEncryptionSettingsInput,
      OutputTypesUnion,
      PutDataCatalogEncryptionSettingsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = PutDataCatalogEncryptionSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDataCatalogEncryptionSettingsInput,
    PutDataCatalogEncryptionSettingsOutput,
    Blob
  >();

  constructor(readonly input: PutDataCatalogEncryptionSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDataCatalogEncryptionSettingsInput,
    PutDataCatalogEncryptionSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutDataCatalogEncryptionSettingsInput,
        PutDataCatalogEncryptionSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
