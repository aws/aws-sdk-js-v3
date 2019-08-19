import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartQuery } from "../model/operations/StartQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartQueryInput } from "../types/StartQueryInput";
import { StartQueryOutput } from "../types/StartQueryOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/StartQueryInput";
export * from "../types/StartQueryOutput";
export * from "../types/StartQueryExceptionsUnion";

export class StartQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartQueryInput,
      OutputTypesUnion,
      StartQueryOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartQueryInput,
    StartQueryOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<StartQueryInput, StartQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartQueryInput, StartQueryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
