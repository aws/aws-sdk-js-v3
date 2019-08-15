import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAuditFinding } from "../model/operations/DescribeAuditFinding";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAuditFindingInput } from "../types/DescribeAuditFindingInput";
import { DescribeAuditFindingOutput } from "../types/DescribeAuditFindingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeAuditFindingInput";
export * from "../types/DescribeAuditFindingOutput";
export * from "../types/DescribeAuditFindingExceptionsUnion";

export class DescribeAuditFindingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAuditFindingInput,
      OutputTypesUnion,
      DescribeAuditFindingOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAuditFinding;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAuditFindingInput,
    DescribeAuditFindingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAuditFindingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAuditFindingInput,
    DescribeAuditFindingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAuditFindingInput, DescribeAuditFindingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
