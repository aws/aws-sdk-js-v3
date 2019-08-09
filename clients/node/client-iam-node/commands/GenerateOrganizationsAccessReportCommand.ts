import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GenerateOrganizationsAccessReport } from "../model/GenerateOrganizationsAccessReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateOrganizationsAccessReportInput } from "../types/GenerateOrganizationsAccessReportInput";
import { GenerateOrganizationsAccessReportOutput } from "../types/GenerateOrganizationsAccessReportOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GenerateOrganizationsAccessReportInput";
export * from "../types/GenerateOrganizationsAccessReportOutput";
export * from "../types/GenerateOrganizationsAccessReportExceptionsUnion";

export class GenerateOrganizationsAccessReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateOrganizationsAccessReportInput,
      OutputTypesUnion,
      GenerateOrganizationsAccessReportOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GenerateOrganizationsAccessReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateOrganizationsAccessReportInput,
    GenerateOrganizationsAccessReportOutput,
    _stream.Readable
  >();

  constructor(readonly input: GenerateOrganizationsAccessReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GenerateOrganizationsAccessReportInput,
    GenerateOrganizationsAccessReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GenerateOrganizationsAccessReportInput,
        GenerateOrganizationsAccessReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
