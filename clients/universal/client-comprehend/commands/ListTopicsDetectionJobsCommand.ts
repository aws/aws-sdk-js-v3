import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTopicsDetectionJobs } from "../model/ListTopicsDetectionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTopicsDetectionJobsInput } from "../types/ListTopicsDetectionJobsInput";
import { ListTopicsDetectionJobsOutput } from "../types/ListTopicsDetectionJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListTopicsDetectionJobsInput";
export * from "../types/ListTopicsDetectionJobsOutput";
export * from "../types/ListTopicsDetectionJobsExceptionsUnion";

export class ListTopicsDetectionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTopicsDetectionJobsInput,
      OutputTypesUnion,
      ListTopicsDetectionJobsOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTopicsDetectionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTopicsDetectionJobsInput,
    ListTopicsDetectionJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTopicsDetectionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTopicsDetectionJobsInput,
    ListTopicsDetectionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTopicsDetectionJobsInput, ListTopicsDetectionJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
