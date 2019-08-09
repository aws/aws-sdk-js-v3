import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGeoLocations } from "../model/ListGeoLocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGeoLocationsInput } from "../types/ListGeoLocationsInput";
import { ListGeoLocationsOutput } from "../types/ListGeoLocationsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListGeoLocationsInput";
export * from "../types/ListGeoLocationsOutput";
export * from "../types/ListGeoLocationsExceptionsUnion";

export class ListGeoLocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGeoLocationsInput,
      OutputTypesUnion,
      ListGeoLocationsOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGeoLocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGeoLocationsInput,
    ListGeoLocationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGeoLocationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGeoLocationsInput, ListGeoLocationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGeoLocationsInput, ListGeoLocationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
