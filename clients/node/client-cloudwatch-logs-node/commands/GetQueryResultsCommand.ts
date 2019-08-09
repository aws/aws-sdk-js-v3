import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetQueryResults } from "../model/GetQueryResults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueryResultsInput } from "../types/GetQueryResultsInput";
import { GetQueryResultsOutput } from "../types/GetQueryResultsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/GetQueryResultsInput";
export * from "../types/GetQueryResultsOutput";
export * from "../types/GetQueryResultsExceptionsUnion";

export class GetQueryResultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueryResultsInput,
      OutputTypesUnion,
      GetQueryResultsOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetQueryResults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueryResultsInput,
    GetQueryResultsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetQueryResultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetQueryResultsInput, GetQueryResultsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQueryResultsInput, GetQueryResultsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
