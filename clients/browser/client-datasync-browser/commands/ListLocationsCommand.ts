import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLocations } from "../model/operations/ListLocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLocationsInput } from "../types/ListLocationsInput";
import { ListLocationsOutput } from "../types/ListLocationsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/ListLocationsInput";
export * from "../types/ListLocationsOutput";
export * from "../types/ListLocationsExceptionsUnion";

export class ListLocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLocationsInput,
      OutputTypesUnion,
      ListLocationsOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = ListLocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLocationsInput,
    ListLocationsOutput,
    Blob
  >();

  constructor(readonly input: ListLocationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLocationsInput, ListLocationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLocationsInput, ListLocationsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
