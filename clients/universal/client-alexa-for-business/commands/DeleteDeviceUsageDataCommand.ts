import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDeviceUsageData } from "../model/DeleteDeviceUsageData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeviceUsageDataInput } from "../types/DeleteDeviceUsageDataInput";
import { DeleteDeviceUsageDataOutput } from "../types/DeleteDeviceUsageDataOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteDeviceUsageDataInput";
export * from "../types/DeleteDeviceUsageDataOutput";
export * from "../types/DeleteDeviceUsageDataExceptionsUnion";

export class DeleteDeviceUsageDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeviceUsageDataInput,
      OutputTypesUnion,
      DeleteDeviceUsageDataOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDeviceUsageData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeviceUsageDataInput,
    DeleteDeviceUsageDataOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDeviceUsageDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeviceUsageDataInput,
    DeleteDeviceUsageDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeviceUsageDataInput, DeleteDeviceUsageDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
