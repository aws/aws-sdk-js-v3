import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateDeviceWithRoom } from "../model/AssociateDeviceWithRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDeviceWithRoomInput } from "../types/AssociateDeviceWithRoomInput";
import { AssociateDeviceWithRoomOutput } from "../types/AssociateDeviceWithRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateDeviceWithRoomInput";
export * from "../types/AssociateDeviceWithRoomOutput";
export * from "../types/AssociateDeviceWithRoomExceptionsUnion";

export class AssociateDeviceWithRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDeviceWithRoomInput,
      OutputTypesUnion,
      AssociateDeviceWithRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateDeviceWithRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDeviceWithRoomInput,
    AssociateDeviceWithRoomOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateDeviceWithRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDeviceWithRoomInput,
    AssociateDeviceWithRoomOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateDeviceWithRoomInput, AssociateDeviceWithRoomOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
