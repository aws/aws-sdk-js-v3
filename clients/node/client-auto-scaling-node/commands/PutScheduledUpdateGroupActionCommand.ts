import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutScheduledUpdateGroupAction } from "../model/operations/PutScheduledUpdateGroupAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutScheduledUpdateGroupActionInput } from "../types/PutScheduledUpdateGroupActionInput";
import { PutScheduledUpdateGroupActionOutput } from "../types/PutScheduledUpdateGroupActionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/PutScheduledUpdateGroupActionInput";
export * from "../types/PutScheduledUpdateGroupActionOutput";
export * from "../types/PutScheduledUpdateGroupActionExceptionsUnion";

export class PutScheduledUpdateGroupActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutScheduledUpdateGroupActionInput,
      OutputTypesUnion,
      PutScheduledUpdateGroupActionOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutScheduledUpdateGroupAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutScheduledUpdateGroupActionInput,
    PutScheduledUpdateGroupActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutScheduledUpdateGroupActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutScheduledUpdateGroupActionInput,
    PutScheduledUpdateGroupActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutScheduledUpdateGroupActionInput,
        PutScheduledUpdateGroupActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
