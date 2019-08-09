import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCatalogImportStatus } from "../model/GetCatalogImportStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCatalogImportStatusInput } from "../types/GetCatalogImportStatusInput";
import { GetCatalogImportStatusOutput } from "../types/GetCatalogImportStatusOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetCatalogImportStatusInput";
export * from "../types/GetCatalogImportStatusOutput";
export * from "../types/GetCatalogImportStatusExceptionsUnion";

export class GetCatalogImportStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCatalogImportStatusInput,
      OutputTypesUnion,
      GetCatalogImportStatusOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCatalogImportStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCatalogImportStatusInput,
    GetCatalogImportStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCatalogImportStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCatalogImportStatusInput,
    GetCatalogImportStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCatalogImportStatusInput, GetCatalogImportStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
