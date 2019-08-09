import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutTargets } from "../model/PutTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutTargetsInput } from "../types/PutTargetsInput";
import { PutTargetsOutput } from "../types/PutTargetsOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/PutTargetsInput";
export * from "../types/PutTargetsOutput";
export * from "../types/PutTargetsExceptionsUnion";

export class PutTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutTargetsInput,
      OutputTypesUnion,
      PutTargetsOutput,
      CloudWatchEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutTargetsInput,
    PutTargetsOutput,
    Uint8Array
  >();

  constructor(readonly input: PutTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutTargetsInput, PutTargetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutTargetsInput, PutTargetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
