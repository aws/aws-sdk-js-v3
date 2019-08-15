import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateDeviceFromPlacement } from "../model/operations/DisassociateDeviceFromPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDeviceFromPlacementInput } from "../types/DisassociateDeviceFromPlacementInput";
import { DisassociateDeviceFromPlacementOutput } from "../types/DisassociateDeviceFromPlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/DisassociateDeviceFromPlacementInput";
export * from "../types/DisassociateDeviceFromPlacementOutput";
export * from "../types/DisassociateDeviceFromPlacementExceptionsUnion";

export class DisassociateDeviceFromPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDeviceFromPlacementInput,
      OutputTypesUnion,
      DisassociateDeviceFromPlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateDeviceFromPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDeviceFromPlacementInput,
    DisassociateDeviceFromPlacementOutput,
    Blob
  >();

  constructor(readonly input: DisassociateDeviceFromPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDeviceFromPlacementInput,
    DisassociateDeviceFromPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateDeviceFromPlacementInput,
        DisassociateDeviceFromPlacementOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
