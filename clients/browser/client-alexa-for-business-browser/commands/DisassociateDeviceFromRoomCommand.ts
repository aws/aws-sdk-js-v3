import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateDeviceFromRoom } from "../model/operations/DisassociateDeviceFromRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDeviceFromRoomInput } from "../types/DisassociateDeviceFromRoomInput";
import { DisassociateDeviceFromRoomOutput } from "../types/DisassociateDeviceFromRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DisassociateDeviceFromRoomInput";
export * from "../types/DisassociateDeviceFromRoomOutput";
export * from "../types/DisassociateDeviceFromRoomExceptionsUnion";

export class DisassociateDeviceFromRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDeviceFromRoomInput,
      OutputTypesUnion,
      DisassociateDeviceFromRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateDeviceFromRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDeviceFromRoomInput,
    DisassociateDeviceFromRoomOutput,
    Blob
  >();

  constructor(readonly input: DisassociateDeviceFromRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDeviceFromRoomInput,
    DisassociateDeviceFromRoomOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateDeviceFromRoomInput,
        DisassociateDeviceFromRoomOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
