import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSatellites } from "../model/ListSatellites";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSatellitesInput } from "../types/ListSatellitesInput";
import { ListSatellitesOutput } from "../types/ListSatellitesOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListSatellitesInput";
export * from "../types/ListSatellitesOutput";
export * from "../types/ListSatellitesExceptionsUnion";

export class ListSatellitesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSatellitesInput,
      OutputTypesUnion,
      ListSatellitesOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSatellites;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSatellitesInput,
    ListSatellitesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSatellitesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSatellitesInput, ListSatellitesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSatellitesInput, ListSatellitesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
