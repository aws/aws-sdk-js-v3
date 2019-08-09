import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSatellite } from "../model/GetSatellite";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSatelliteInput } from "../types/GetSatelliteInput";
import { GetSatelliteOutput } from "../types/GetSatelliteOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/GetSatelliteInput";
export * from "../types/GetSatelliteOutput";
export * from "../types/GetSatelliteExceptionsUnion";

export class GetSatelliteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSatelliteInput,
      OutputTypesUnion,
      GetSatelliteOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSatellite;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSatelliteInput,
    GetSatelliteOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSatelliteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSatelliteInput, GetSatelliteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSatelliteInput, GetSatelliteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
