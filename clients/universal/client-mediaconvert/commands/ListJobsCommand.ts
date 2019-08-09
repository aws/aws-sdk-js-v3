import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListJobs } from "../model/ListJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobsInput } from "../types/ListJobsInput";
import { ListJobsOutput } from "../types/ListJobsOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/ListJobsInput";
export * from "../types/ListJobsOutput";
export * from "../types/ListJobsExceptionsUnion";

export class ListJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobsInput,
      OutputTypesUnion,
      ListJobsOutput,
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobsInput,
    ListJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<ListJobsInput, ListJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobsInput, ListJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
