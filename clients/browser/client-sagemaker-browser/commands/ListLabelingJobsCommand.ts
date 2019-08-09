import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLabelingJobs } from "../model/ListLabelingJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLabelingJobsInput } from "../types/ListLabelingJobsInput";
import { ListLabelingJobsOutput } from "../types/ListLabelingJobsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListLabelingJobsInput";
export * from "../types/ListLabelingJobsOutput";
export * from "../types/ListLabelingJobsExceptionsUnion";

export class ListLabelingJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLabelingJobsInput,
      OutputTypesUnion,
      ListLabelingJobsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListLabelingJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLabelingJobsInput,
    ListLabelingJobsOutput,
    Blob
  >();

  constructor(readonly input: ListLabelingJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLabelingJobsInput, ListLabelingJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLabelingJobsInput, ListLabelingJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
