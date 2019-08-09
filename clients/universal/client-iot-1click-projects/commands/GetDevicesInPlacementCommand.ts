import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevicesInPlacement } from "../model/GetDevicesInPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDevicesInPlacementInput } from "../types/GetDevicesInPlacementInput";
import { GetDevicesInPlacementOutput } from "../types/GetDevicesInPlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/GetDevicesInPlacementInput";
export * from "../types/GetDevicesInPlacementOutput";
export * from "../types/GetDevicesInPlacementExceptionsUnion";

export class GetDevicesInPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDevicesInPlacementInput,
      OutputTypesUnion,
      GetDevicesInPlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDevicesInPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevicesInPlacementInput,
    GetDevicesInPlacementOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDevicesInPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDevicesInPlacementInput,
    GetDevicesInPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDevicesInPlacementInput, GetDevicesInPlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
