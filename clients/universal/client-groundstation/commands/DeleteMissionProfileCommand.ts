import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMissionProfile } from "../model/DeleteMissionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMissionProfileInput } from "../types/DeleteMissionProfileInput";
import { DeleteMissionProfileOutput } from "../types/DeleteMissionProfileOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/DeleteMissionProfileInput";
export * from "../types/DeleteMissionProfileOutput";
export * from "../types/DeleteMissionProfileExceptionsUnion";

export class DeleteMissionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMissionProfileInput,
      OutputTypesUnion,
      DeleteMissionProfileOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteMissionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMissionProfileInput,
    DeleteMissionProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteMissionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMissionProfileInput,
    DeleteMissionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMissionProfileInput, DeleteMissionProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
