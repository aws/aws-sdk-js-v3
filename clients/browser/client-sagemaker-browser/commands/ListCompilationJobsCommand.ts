import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCompilationJobs } from "../model/operations/ListCompilationJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCompilationJobsInput } from "../types/ListCompilationJobsInput";
import { ListCompilationJobsOutput } from "../types/ListCompilationJobsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListCompilationJobsInput";
export * from "../types/ListCompilationJobsOutput";
export * from "../types/ListCompilationJobsExceptionsUnion";

export class ListCompilationJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCompilationJobsInput,
      OutputTypesUnion,
      ListCompilationJobsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListCompilationJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCompilationJobsInput,
    ListCompilationJobsOutput,
    Blob
  >();

  constructor(readonly input: ListCompilationJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCompilationJobsInput,
    ListCompilationJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCompilationJobsInput, ListCompilationJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
