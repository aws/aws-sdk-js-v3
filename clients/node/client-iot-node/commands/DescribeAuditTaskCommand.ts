import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAuditTask } from "../model/DescribeAuditTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAuditTaskInput } from "../types/DescribeAuditTaskInput";
import { DescribeAuditTaskOutput } from "../types/DescribeAuditTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeAuditTaskInput";
export * from "../types/DescribeAuditTaskOutput";
export * from "../types/DescribeAuditTaskExceptionsUnion";

export class DescribeAuditTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAuditTaskInput,
      OutputTypesUnion,
      DescribeAuditTaskOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAuditTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAuditTaskInput,
    DescribeAuditTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAuditTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAuditTaskInput, DescribeAuditTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAuditTaskInput, DescribeAuditTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
