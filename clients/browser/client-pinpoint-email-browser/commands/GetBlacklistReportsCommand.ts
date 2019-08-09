import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBlacklistReports } from "../model/GetBlacklistReports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBlacklistReportsInput } from "../types/GetBlacklistReportsInput";
import { GetBlacklistReportsOutput } from "../types/GetBlacklistReportsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetBlacklistReportsInput";
export * from "../types/GetBlacklistReportsOutput";
export * from "../types/GetBlacklistReportsExceptionsUnion";

export class GetBlacklistReportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBlacklistReportsInput,
      OutputTypesUnion,
      GetBlacklistReportsOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetBlacklistReports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBlacklistReportsInput,
    GetBlacklistReportsOutput,
    Blob
  >();

  constructor(readonly input: GetBlacklistReportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBlacklistReportsInput,
    GetBlacklistReportsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBlacklistReportsInput, GetBlacklistReportsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
