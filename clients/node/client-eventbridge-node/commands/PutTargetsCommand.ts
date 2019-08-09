import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutTargets } from "../model/PutTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutTargetsInput } from "../types/PutTargetsInput";
import { PutTargetsOutput } from "../types/PutTargetsOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
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
      EventBridgeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutTargetsInput,
    PutTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EventBridgeResolvedConfiguration
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
