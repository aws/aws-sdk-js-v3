import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMitigationAction } from "../model/DeleteMitigationAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMitigationActionInput } from "../types/DeleteMitigationActionInput";
import { DeleteMitigationActionOutput } from "../types/DeleteMitigationActionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteMitigationActionInput";
export * from "../types/DeleteMitigationActionOutput";
export * from "../types/DeleteMitigationActionExceptionsUnion";

export class DeleteMitigationActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMitigationActionInput,
      OutputTypesUnion,
      DeleteMitigationActionOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMitigationAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMitigationActionInput,
    DeleteMitigationActionOutput,
    Blob
  >();

  constructor(readonly input: DeleteMitigationActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMitigationActionInput,
    DeleteMitigationActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMitigationActionInput, DeleteMitigationActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
