import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTopicsDetectionJob } from "../model/operations/DescribeTopicsDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTopicsDetectionJobInput } from "../types/DescribeTopicsDetectionJobInput";
import { DescribeTopicsDetectionJobOutput } from "../types/DescribeTopicsDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeTopicsDetectionJobInput";
export * from "../types/DescribeTopicsDetectionJobOutput";
export * from "../types/DescribeTopicsDetectionJobExceptionsUnion";

export class DescribeTopicsDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTopicsDetectionJobInput,
      OutputTypesUnion,
      DescribeTopicsDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTopicsDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTopicsDetectionJobInput,
    DescribeTopicsDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeTopicsDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTopicsDetectionJobInput,
    DescribeTopicsDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTopicsDetectionJobInput,
        DescribeTopicsDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
