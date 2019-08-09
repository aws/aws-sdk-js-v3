import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOrganizationsAccessReport } from "../model/GetOrganizationsAccessReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOrganizationsAccessReportInput } from "../types/GetOrganizationsAccessReportInput";
import { GetOrganizationsAccessReportOutput } from "../types/GetOrganizationsAccessReportOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetOrganizationsAccessReportInput";
export * from "../types/GetOrganizationsAccessReportOutput";
export * from "../types/GetOrganizationsAccessReportExceptionsUnion";

export class GetOrganizationsAccessReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOrganizationsAccessReportInput,
      OutputTypesUnion,
      GetOrganizationsAccessReportOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOrganizationsAccessReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOrganizationsAccessReportInput,
    GetOrganizationsAccessReportOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOrganizationsAccessReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOrganizationsAccessReportInput,
    GetOrganizationsAccessReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetOrganizationsAccessReportInput,
        GetOrganizationsAccessReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
