import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDevice } from "../model/UpdateDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeviceInput } from "../types/UpdateDeviceInput";
import { UpdateDeviceOutput } from "../types/UpdateDeviceOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateDeviceInput";
export * from "../types/UpdateDeviceOutput";
export * from "../types/UpdateDeviceExceptionsUnion";

export class UpdateDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeviceInput,
      OutputTypesUnion,
      UpdateDeviceOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeviceInput,
    UpdateDeviceOutput,
    Blob
  >();

  constructor(readonly input: UpdateDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDeviceInput, UpdateDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeviceInput, UpdateDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
