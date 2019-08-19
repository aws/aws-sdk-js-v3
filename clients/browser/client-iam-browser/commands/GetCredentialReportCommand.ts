import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCredentialReport } from "../model/operations/GetCredentialReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCredentialReportInput } from "../types/GetCredentialReportInput";
import { GetCredentialReportOutput } from "../types/GetCredentialReportOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetCredentialReportInput";
export * from "../types/GetCredentialReportOutput";
export * from "../types/GetCredentialReportExceptionsUnion";

export class GetCredentialReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCredentialReportInput,
      OutputTypesUnion,
      GetCredentialReportOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetCredentialReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCredentialReportInput,
    GetCredentialReportOutput,
    Blob
  >();

  constructor(readonly input: GetCredentialReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCredentialReportInput,
    GetCredentialReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCredentialReportInput, GetCredentialReportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
