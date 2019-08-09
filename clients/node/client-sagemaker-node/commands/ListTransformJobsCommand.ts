import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTransformJobs } from "../model/ListTransformJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTransformJobsInput } from "../types/ListTransformJobsInput";
import { ListTransformJobsOutput } from "../types/ListTransformJobsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListTransformJobsInput";
export * from "../types/ListTransformJobsOutput";
export * from "../types/ListTransformJobsExceptionsUnion";

export class ListTransformJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTransformJobsInput,
      OutputTypesUnion,
      ListTransformJobsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTransformJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTransformJobsInput,
    ListTransformJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTransformJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTransformJobsInput, ListTransformJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTransformJobsInput, ListTransformJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
