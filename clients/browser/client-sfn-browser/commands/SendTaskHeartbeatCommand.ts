import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendTaskHeartbeat } from "../model/operations/SendTaskHeartbeat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendTaskHeartbeatInput } from "../types/SendTaskHeartbeatInput";
import { SendTaskHeartbeatOutput } from "../types/SendTaskHeartbeatOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/SendTaskHeartbeatInput";
export * from "../types/SendTaskHeartbeatOutput";
export * from "../types/SendTaskHeartbeatExceptionsUnion";

export class SendTaskHeartbeatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendTaskHeartbeatInput,
      OutputTypesUnion,
      SendTaskHeartbeatOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = SendTaskHeartbeat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendTaskHeartbeatInput,
    SendTaskHeartbeatOutput,
    Blob
  >();

  constructor(readonly input: SendTaskHeartbeatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<SendTaskHeartbeatInput, SendTaskHeartbeatOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendTaskHeartbeatInput, SendTaskHeartbeatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
