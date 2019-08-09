import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceEventStartTime } from "../model/ModifyInstanceEventStartTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceEventStartTimeInput } from "../types/ModifyInstanceEventStartTimeInput";
import { ModifyInstanceEventStartTimeOutput } from "../types/ModifyInstanceEventStartTimeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyInstanceEventStartTimeInput";
export * from "../types/ModifyInstanceEventStartTimeOutput";
export * from "../types/ModifyInstanceEventStartTimeExceptionsUnion";

export class ModifyInstanceEventStartTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceEventStartTimeInput,
      OutputTypesUnion,
      ModifyInstanceEventStartTimeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyInstanceEventStartTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceEventStartTimeInput,
    ModifyInstanceEventStartTimeOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyInstanceEventStartTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceEventStartTimeInput,
    ModifyInstanceEventStartTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyInstanceEventStartTimeInput,
        ModifyInstanceEventStartTimeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
