import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeploymentJobs } from "../model/operations/ListDeploymentJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentJobsInput } from "../types/ListDeploymentJobsInput";
import { ListDeploymentJobsOutput } from "../types/ListDeploymentJobsOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/ListDeploymentJobsInput";
export * from "../types/ListDeploymentJobsOutput";
export * from "../types/ListDeploymentJobsExceptionsUnion";

export class ListDeploymentJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentJobsInput,
      OutputTypesUnion,
      ListDeploymentJobsOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListDeploymentJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentJobsInput,
    ListDeploymentJobsOutput,
    Blob
  >();

  constructor(readonly input: ListDeploymentJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeploymentJobsInput,
    ListDeploymentJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentJobsInput, ListDeploymentJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
