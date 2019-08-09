import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEntitiesDetectionJob } from "../model/DescribeEntitiesDetectionJob";
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
      Uint8Array
    > {
  readonly model = DescribeEntitiesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEntitiesDetectionJobInput,
    DescribeEntitiesDetectionJobOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEntitiesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
