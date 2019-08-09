import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteImportData } from "../model/BatchDeleteImportData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteImportDataInput } from "../types/BatchDeleteImportDataInput";
import { BatchDeleteImportDataOutput } from "../types/BatchDeleteImportDataOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/BatchDeleteImportDataInput";
export * from "../types/BatchDeleteImportDataOutput";
export * from "../types/BatchDeleteImportDataExceptionsUnion";

export class BatchDeleteImportDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteImportDataInput,
      OutputTypesUnion,
      BatchDeleteImportDataOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchDeleteImportData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteImportDataInput,
    BatchDeleteImportDataOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchDeleteImportDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeleteImportDataInput,
    BatchDeleteImportDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteImportDataInput, BatchDeleteImportDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
