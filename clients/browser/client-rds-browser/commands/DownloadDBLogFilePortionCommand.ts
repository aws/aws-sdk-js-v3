import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DownloadDBLogFilePortion } from "../model/DownloadDBLogFilePortion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DownloadDBLogFilePortionInput } from "../types/DownloadDBLogFilePortionInput";
import { DownloadDBLogFilePortionOutput } from "../types/DownloadDBLogFilePortionOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DownloadDBLogFilePortionInput";
export * from "../types/DownloadDBLogFilePortionOutput";
export * from "../types/DownloadDBLogFilePortionExceptionsUnion";

export class DownloadDBLogFilePortionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DownloadDBLogFilePortionInput,
      OutputTypesUnion,
      DownloadDBLogFilePortionOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DownloadDBLogFilePortion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DownloadDBLogFilePortionInput,
    DownloadDBLogFilePortionOutput,
    Blob
  >();

  constructor(readonly input: DownloadDBLogFilePortionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DownloadDBLogFilePortionInput,
    DownloadDBLogFilePortionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DownloadDBLogFilePortionInput, DownloadDBLogFilePortionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
