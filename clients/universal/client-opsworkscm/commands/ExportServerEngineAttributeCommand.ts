import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportServerEngineAttribute } from "../model/ExportServerEngineAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportServerEngineAttributeInput } from "../types/ExportServerEngineAttributeInput";
import { ExportServerEngineAttributeOutput } from "../types/ExportServerEngineAttributeOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/ExportServerEngineAttributeInput";
export * from "../types/ExportServerEngineAttributeOutput";
export * from "../types/ExportServerEngineAttributeExceptionsUnion";

export class ExportServerEngineAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportServerEngineAttributeInput,
      OutputTypesUnion,
      ExportServerEngineAttributeOutput,
      OpsWorksCMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ExportServerEngineAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportServerEngineAttributeInput,
    ExportServerEngineAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: ExportServerEngineAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportServerEngineAttributeInput,
    ExportServerEngineAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExportServerEngineAttributeInput,
        ExportServerEngineAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
