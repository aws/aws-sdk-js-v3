import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDevice } from "../model/DeleteDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeviceInput } from "../types/DeleteDeviceInput";
import { DeleteDeviceOutput } from "../types/DeleteDeviceOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteDeviceInput";
export * from "../types/DeleteDeviceOutput";
export * from "../types/DeleteDeviceExceptionsUnion";

export class DeleteDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeviceInput,
      OutputTypesUnion,
      DeleteDeviceOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeviceInput,
    DeleteDeviceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDeviceInput, DeleteDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeviceInput, DeleteDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
