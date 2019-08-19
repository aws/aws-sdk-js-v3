import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetImport } from "../model/operations/GetImport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetImportInput } from "../types/GetImportInput";
import { GetImportOutput } from "../types/GetImportOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetImportInput";
export * from "../types/GetImportOutput";
export * from "../types/GetImportExceptionsUnion";

export class GetImportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetImportInput,
      OutputTypesUnion,
      GetImportOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetImport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetImportInput,
    GetImportOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetImportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetImportInput, GetImportOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetImportInput, GetImportOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
