import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListHyperParameterTuningJobs } from "../model/ListHyperParameterTuningJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHyperParameterTuningJobsInput } from "../types/ListHyperParameterTuningJobsInput";
import { ListHyperParameterTuningJobsOutput } from "../types/ListHyperParameterTuningJobsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListHyperParameterTuningJobsInput";
export * from "../types/ListHyperParameterTuningJobsOutput";
export * from "../types/ListHyperParameterTuningJobsExceptionsUnion";

export class ListHyperParameterTuningJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHyperParameterTuningJobsInput,
      OutputTypesUnion,
      ListHyperParameterTuningJobsOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListHyperParameterTuningJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHyperParameterTuningJobsInput,
    ListHyperParameterTuningJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListHyperParameterTuningJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListHyperParameterTuningJobsInput,
    ListHyperParameterTuningJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListHyperParameterTuningJobsInput,
        ListHyperParameterTuningJobsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
