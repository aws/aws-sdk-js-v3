import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEntitiesDetectionJobs } from "../model/ListEntitiesDetectionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEntitiesDetectionJobsInput } from "../types/ListEntitiesDetectionJobsInput";
import { ListEntitiesDetectionJobsOutput } from "../types/ListEntitiesDetectionJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListEntitiesDetectionJobsInput";
export * from "../types/ListEntitiesDetectionJobsOutput";
export * from "../types/ListEntitiesDetectionJobsExceptionsUnion";

export class ListEntitiesDetectionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEntitiesDetectionJobsInput,
      OutputTypesUnion,
      ListEntitiesDetectionJobsOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = ListEntitiesDetectionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEntitiesDetectionJobsInput,
    ListEntitiesDetectionJobsOutput,
    Blob
  >();

  constructor(readonly input: ListEntitiesDetectionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEntitiesDetectionJobsInput,
    ListEntitiesDetectionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEntitiesDetectionJobsInput, ListEntitiesDetectionJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
