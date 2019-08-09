import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMissionProfile } from "../model/UpdateMissionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMissionProfileInput } from "../types/UpdateMissionProfileInput";
import { UpdateMissionProfileOutput } from "../types/UpdateMissionProfileOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/UpdateMissionProfileInput";
export * from "../types/UpdateMissionProfileOutput";
export * from "../types/UpdateMissionProfileExceptionsUnion";

export class UpdateMissionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMissionProfileInput,
      OutputTypesUnion,
      UpdateMissionProfileOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMissionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMissionProfileInput,
    UpdateMissionProfileOutput,
    Blob
  >();

  constructor(readonly input: UpdateMissionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMissionProfileInput,
    UpdateMissionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMissionProfileInput, UpdateMissionProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
