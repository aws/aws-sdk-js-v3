import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSigningJobs } from "../model/operations/ListSigningJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSigningJobsInput } from "../types/ListSigningJobsInput";
import { ListSigningJobsOutput } from "../types/ListSigningJobsOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/ListSigningJobsInput";
export * from "../types/ListSigningJobsOutput";
export * from "../types/ListSigningJobsExceptionsUnion";

export class ListSigningJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSigningJobsInput,
      OutputTypesUnion,
      ListSigningJobsOutput,
      signerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSigningJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSigningJobsInput,
    ListSigningJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSigningJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSigningJobsInput, ListSigningJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSigningJobsInput, ListSigningJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
