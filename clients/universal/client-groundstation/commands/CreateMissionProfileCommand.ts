import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMissionProfile } from "../model/CreateMissionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMissionProfileInput } from "../types/CreateMissionProfileInput";
import { CreateMissionProfileOutput } from "../types/CreateMissionProfileOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/CreateMissionProfileInput";
export * from "../types/CreateMissionProfileOutput";
export * from "../types/CreateMissionProfileExceptionsUnion";

export class CreateMissionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMissionProfileInput,
      OutputTypesUnion,
      CreateMissionProfileOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateMissionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMissionProfileInput,
    CreateMissionProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateMissionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMissionProfileInput,
    CreateMissionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMissionProfileInput, CreateMissionProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
