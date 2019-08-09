import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchPutScheduledUpdateGroupAction } from "../model/BatchPutScheduledUpdateGroupAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchPutScheduledUpdateGroupActionInput } from "../types/BatchPutScheduledUpdateGroupActionInput";
import { BatchPutScheduledUpdateGroupActionOutput } from "../types/BatchPutScheduledUpdateGroupActionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/BatchPutScheduledUpdateGroupActionInput";
export * from "../types/BatchPutScheduledUpdateGroupActionOutput";
export * from "../types/BatchPutScheduledUpdateGroupActionExceptionsUnion";

export class BatchPutScheduledUpdateGroupActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchPutScheduledUpdateGroupActionInput,
      OutputTypesUnion,
      BatchPutScheduledUpdateGroupActionOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchPutScheduledUpdateGroupAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchPutScheduledUpdateGroupActionInput,
    BatchPutScheduledUpdateGroupActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchPutScheduledUpdateGroupActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchPutScheduledUpdateGroupActionInput,
    BatchPutScheduledUpdateGroupActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchPutScheduledUpdateGroupActionInput,
        BatchPutScheduledUpdateGroupActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
