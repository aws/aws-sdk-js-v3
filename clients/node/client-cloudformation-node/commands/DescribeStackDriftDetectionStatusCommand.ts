import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStackDriftDetectionStatus } from "../model/operations/DescribeStackDriftDetectionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackDriftDetectionStatusInput } from "../types/DescribeStackDriftDetectionStatusInput";
import { DescribeStackDriftDetectionStatusOutput } from "../types/DescribeStackDriftDetectionStatusOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackDriftDetectionStatusInput";
export * from "../types/DescribeStackDriftDetectionStatusOutput";
export * from "../types/DescribeStackDriftDetectionStatusExceptionsUnion";

export class DescribeStackDriftDetectionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackDriftDetectionStatusInput,
      OutputTypesUnion,
      DescribeStackDriftDetectionStatusOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStackDriftDetectionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackDriftDetectionStatusInput,
    DescribeStackDriftDetectionStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStackDriftDetectionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackDriftDetectionStatusInput,
    DescribeStackDriftDetectionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStackDriftDetectionStatusInput,
        DescribeStackDriftDetectionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
