import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RecordActivityTaskHeartbeat } from "../model/RecordActivityTaskHeartbeat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RecordActivityTaskHeartbeatInput } from "../types/RecordActivityTaskHeartbeatInput";
import { RecordActivityTaskHeartbeatOutput } from "../types/RecordActivityTaskHeartbeatOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RecordActivityTaskHeartbeatInput";
export * from "../types/RecordActivityTaskHeartbeatOutput";
export * from "../types/RecordActivityTaskHeartbeatExceptionsUnion";

export class RecordActivityTaskHeartbeatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RecordActivityTaskHeartbeatInput,
      OutputTypesUnion,
      RecordActivityTaskHeartbeatOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RecordActivityTaskHeartbeat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RecordActivityTaskHeartbeatInput,
    RecordActivityTaskHeartbeatOutput,
    Uint8Array
  >();

  constructor(readonly input: RecordActivityTaskHeartbeatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RecordActivityTaskHeartbeatInput,
    RecordActivityTaskHeartbeatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RecordActivityTaskHeartbeatInput,
        RecordActivityTaskHeartbeatOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
