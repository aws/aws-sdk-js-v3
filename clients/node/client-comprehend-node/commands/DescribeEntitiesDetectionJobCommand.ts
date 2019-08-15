import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEntitiesDetectionJob } from "../model/operations/DescribeEntitiesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEntitiesDetectionJobInput } from "../types/DescribeEntitiesDetectionJobInput";
import { DescribeEntitiesDetectionJobOutput } from "../types/DescribeEntitiesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeEntitiesDetectionJobInput";
export * from "../types/DescribeEntitiesDetectionJobOutput";
export * from "../types/DescribeEntitiesDetectionJobExceptionsUnion";

export class DescribeEntitiesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEntitiesDetectionJobInput,
      OutputTypesUnion,
      DescribeEntitiesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEntitiesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEntitiesDetectionJobInput,
    DescribeEntitiesDetectionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEntitiesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEntitiesDetectionJobInput,
    DescribeEntitiesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEntitiesDetectionJobInput,
        DescribeEntitiesDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
