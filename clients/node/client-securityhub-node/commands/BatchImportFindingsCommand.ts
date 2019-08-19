import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchImportFindings } from "../model/operations/BatchImportFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchImportFindingsInput } from "../types/BatchImportFindingsInput";
import { BatchImportFindingsOutput } from "../types/BatchImportFindingsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/BatchImportFindingsInput";
export * from "../types/BatchImportFindingsOutput";
export * from "../types/BatchImportFindingsExceptionsUnion";

export class BatchImportFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchImportFindingsInput,
      OutputTypesUnion,
      BatchImportFindingsOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchImportFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchImportFindingsInput,
    BatchImportFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchImportFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchImportFindingsInput,
    BatchImportFindingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchImportFindingsInput, BatchImportFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
