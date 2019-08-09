import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetComplianceDetail } from "../model/GetComplianceDetail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetComplianceDetailInput } from "../types/GetComplianceDetailInput";
import { GetComplianceDetailOutput } from "../types/GetComplianceDetailOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/GetComplianceDetailInput";
export * from "../types/GetComplianceDetailOutput";
export * from "../types/GetComplianceDetailExceptionsUnion";

export class GetComplianceDetailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetComplianceDetailInput,
      OutputTypesUnion,
      GetComplianceDetailOutput,
      FMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetComplianceDetail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetComplianceDetailInput,
    GetComplianceDetailOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetComplianceDetailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetComplianceDetailInput,
    GetComplianceDetailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetComplianceDetailInput, GetComplianceDetailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
