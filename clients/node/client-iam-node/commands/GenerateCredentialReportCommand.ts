import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GenerateCredentialReport } from "../model/GenerateCredentialReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateCredentialReportInput } from "../types/GenerateCredentialReportInput";
import { GenerateCredentialReportOutput } from "../types/GenerateCredentialReportOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GenerateCredentialReportInput";
export * from "../types/GenerateCredentialReportOutput";
export * from "../types/GenerateCredentialReportExceptionsUnion";

export class GenerateCredentialReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateCredentialReportInput,
      OutputTypesUnion,
      GenerateCredentialReportOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GenerateCredentialReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateCredentialReportInput,
    GenerateCredentialReportOutput,
    _stream.Readable
  >();

  constructor(readonly input: GenerateCredentialReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GenerateCredentialReportInput,
    GenerateCredentialReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateCredentialReportInput, GenerateCredentialReportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
