import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetComplianceDetailsByResource } from "../model/GetComplianceDetailsByResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetComplianceDetailsByResourceInput } from "../types/GetComplianceDetailsByResourceInput";
import { GetComplianceDetailsByResourceOutput } from "../types/GetComplianceDetailsByResourceOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetComplianceDetailsByResourceInput";
export * from "../types/GetComplianceDetailsByResourceOutput";
export * from "../types/GetComplianceDetailsByResourceExceptionsUnion";

export class GetComplianceDetailsByResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetComplianceDetailsByResourceInput,
      OutputTypesUnion,
      GetComplianceDetailsByResourceOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetComplianceDetailsByResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetComplianceDetailsByResourceInput,
    GetComplianceDetailsByResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetComplianceDetailsByResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetComplianceDetailsByResourceInput,
    GetComplianceDetailsByResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetComplianceDetailsByResourceInput,
        GetComplianceDetailsByResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
