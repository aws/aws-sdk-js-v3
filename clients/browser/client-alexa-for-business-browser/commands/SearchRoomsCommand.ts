import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchRooms } from "../model/SearchRooms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchRoomsInput } from "../types/SearchRoomsInput";
import { SearchRoomsOutput } from "../types/SearchRoomsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchRoomsInput";
export * from "../types/SearchRoomsOutput";
export * from "../types/SearchRoomsExceptionsUnion";

export class SearchRoomsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchRoomsInput,
      OutputTypesUnion,
      SearchRoomsOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = SearchRooms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchRoomsInput,
    SearchRoomsOutput,
    Blob
  >();

  constructor(readonly input: SearchRoomsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchRoomsInput, SearchRoomsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchRoomsInput, SearchRoomsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
