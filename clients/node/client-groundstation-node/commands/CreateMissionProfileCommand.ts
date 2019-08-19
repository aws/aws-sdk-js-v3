import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateMissionProfile } from "../model/operations/CreateMissionProfile";
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
      _stream.Readable
    > {
  readonly model = CreateMissionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMissionProfileInput,
    CreateMissionProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateMissionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
