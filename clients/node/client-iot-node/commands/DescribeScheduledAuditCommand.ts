import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScheduledAudit } from "../model/operations/DescribeScheduledAudit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledAuditInput } from "../types/DescribeScheduledAuditInput";
import { DescribeScheduledAuditOutput } from "../types/DescribeScheduledAuditOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeScheduledAuditInput";
export * from "../types/DescribeScheduledAuditOutput";
export * from "../types/DescribeScheduledAuditExceptionsUnion";

export class DescribeScheduledAuditCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduledAuditInput,
      OutputTypesUnion,
      DescribeScheduledAuditOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScheduledAudit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledAuditInput,
    DescribeScheduledAuditOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScheduledAuditInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScheduledAuditInput,
    DescribeScheduledAuditOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScheduledAuditInput, DescribeScheduledAuditOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
