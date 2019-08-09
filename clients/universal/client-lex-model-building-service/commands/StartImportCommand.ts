import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartImport } from "../model/StartImport";
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
      Uint8Array
    > {
  readonly model = StartImport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartImportInput,
    StartImportOutput,
    Uint8Array
  >();

  constructor(readonly input: StartImportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
