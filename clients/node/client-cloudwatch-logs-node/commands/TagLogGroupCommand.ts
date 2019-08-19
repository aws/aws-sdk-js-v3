import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TagLogGroup } from "../model/operations/TagLogGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagLogGroupInput } from "../types/TagLogGroupInput";
import { TagLogGroupOutput } from "../types/TagLogGroupOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/TagLogGroupInput";
export * from "../types/TagLogGroupOutput";
export * from "../types/TagLogGroupExceptionsUnion";

export class TagLogGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagLogGroupInput,
      OutputTypesUnion,
      TagLogGroupOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TagLogGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagLogGroupInput,
    TagLogGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagLogGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<TagLogGroupInput, TagLogGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagLogGroupInput, TagLogGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
