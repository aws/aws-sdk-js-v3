import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMitigationAction } from "../model/operations/UpdateMitigationAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMitigationActionInput } from "../types/UpdateMitigationActionInput";
import { UpdateMitigationActionOutput } from "../types/UpdateMitigationActionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateMitigationActionInput";
export * from "../types/UpdateMitigationActionOutput";
export * from "../types/UpdateMitigationActionExceptionsUnion";

export class UpdateMitigationActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMitigationActionInput,
      OutputTypesUnion,
      UpdateMitigationActionOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMitigationAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMitigationActionInput,
    UpdateMitigationActionOutput,
    Blob
  >();

  constructor(readonly input: UpdateMitigationActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMitigationActionInput,
    UpdateMitigationActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMitigationActionInput, UpdateMitigationActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
