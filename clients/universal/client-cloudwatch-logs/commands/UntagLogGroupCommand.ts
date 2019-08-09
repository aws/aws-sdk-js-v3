import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagLogGroup } from "../model/UntagLogGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagLogGroupInput } from "../types/UntagLogGroupInput";
import { UntagLogGroupOutput } from "../types/UntagLogGroupOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/UntagLogGroupInput";
export * from "../types/UntagLogGroupOutput";
export * from "../types/UntagLogGroupExceptionsUnion";

export class UntagLogGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagLogGroupInput,
      OutputTypesUnion,
      UntagLogGroupOutput,
      CloudWatchLogsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UntagLogGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagLogGroupInput,
    UntagLogGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagLogGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagLogGroupInput, UntagLogGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagLogGroupInput, UntagLogGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
