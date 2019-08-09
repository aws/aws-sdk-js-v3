import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMissionProfile } from "../model/GetMissionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMissionProfileInput } from "../types/GetMissionProfileInput";
import { GetMissionProfileOutput } from "../types/GetMissionProfileOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/GetMissionProfileInput";
export * from "../types/GetMissionProfileOutput";
export * from "../types/GetMissionProfileExceptionsUnion";

export class GetMissionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMissionProfileInput,
      OutputTypesUnion,
      GetMissionProfileOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMissionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMissionProfileInput,
    GetMissionProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMissionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMissionProfileInput, GetMissionProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMissionProfileInput, GetMissionProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
