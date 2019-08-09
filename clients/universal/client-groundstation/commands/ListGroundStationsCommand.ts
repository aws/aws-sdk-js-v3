import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroundStations } from "../model/ListGroundStations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroundStationsInput } from "../types/ListGroundStationsInput";
import { ListGroundStationsOutput } from "../types/ListGroundStationsOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListGroundStationsInput";
export * from "../types/ListGroundStationsOutput";
export * from "../types/ListGroundStationsExceptionsUnion";

export class ListGroundStationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroundStationsInput,
      OutputTypesUnion,
      ListGroundStationsOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListGroundStations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroundStationsInput,
    ListGroundStationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListGroundStationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListGroundStationsInput,
    ListGroundStationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroundStationsInput, ListGroundStationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
