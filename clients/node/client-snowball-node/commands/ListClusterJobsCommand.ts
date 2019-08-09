import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListClusterJobs } from "../model/ListClusterJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListClusterJobsInput } from "../types/ListClusterJobsInput";
import { ListClusterJobsOutput } from "../types/ListClusterJobsOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/ListClusterJobsInput";
export * from "../types/ListClusterJobsOutput";
export * from "../types/ListClusterJobsExceptionsUnion";

export class ListClusterJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListClusterJobsInput,
      OutputTypesUnion,
      ListClusterJobsOutput,
      SnowballResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListClusterJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListClusterJobsInput,
    ListClusterJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListClusterJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<ListClusterJobsInput, ListClusterJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListClusterJobsInput, ListClusterJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
