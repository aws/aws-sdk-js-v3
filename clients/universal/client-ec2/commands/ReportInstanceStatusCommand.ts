import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReportInstanceStatus } from "../model/ReportInstanceStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReportInstanceStatusInput } from "../types/ReportInstanceStatusInput";
import { ReportInstanceStatusOutput } from "../types/ReportInstanceStatusOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReportInstanceStatusInput";
export * from "../types/ReportInstanceStatusOutput";
export * from "../types/ReportInstanceStatusExceptionsUnion";

export class ReportInstanceStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReportInstanceStatusInput,
      OutputTypesUnion,
      ReportInstanceStatusOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ReportInstanceStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReportInstanceStatusInput,
    ReportInstanceStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: ReportInstanceStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReportInstanceStatusInput,
    ReportInstanceStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReportInstanceStatusInput, ReportInstanceStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
