import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetExport } from "../model/GetExport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExportInput } from "../types/GetExportInput";
import { GetExportOutput } from "../types/GetExportOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetExportInput";
export * from "../types/GetExportOutput";
export * from "../types/GetExportExceptionsUnion";

export class GetExportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExportInput,
      OutputTypesUnion,
      GetExportOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetExport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExportInput,
    GetExportOutput,
    Uint8Array
  >();

  constructor(readonly input: GetExportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetExportInput, GetExportOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetExportInput, GetExportOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
