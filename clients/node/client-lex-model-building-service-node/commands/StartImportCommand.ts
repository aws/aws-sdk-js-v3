import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartImport } from "../model/operations/StartImport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartImportInput } from "../types/StartImportInput";
import { StartImportOutput } from "../types/StartImportOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/StartImportInput";
export * from "../types/StartImportOutput";
export * from "../types/StartImportExceptionsUnion";

export class StartImportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartImportInput,
      OutputTypesUnion,
      StartImportOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartImport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartImportInput,
    StartImportOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartImportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<StartImportInput, StartImportOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartImportInput, StartImportOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
