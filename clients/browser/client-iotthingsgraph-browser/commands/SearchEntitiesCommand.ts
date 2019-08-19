import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchEntities } from "../model/operations/SearchEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchEntitiesInput } from "../types/SearchEntitiesInput";
import { SearchEntitiesOutput } from "../types/SearchEntitiesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchEntitiesInput";
export * from "../types/SearchEntitiesOutput";
export * from "../types/SearchEntitiesExceptionsUnion";

export class SearchEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchEntitiesInput,
      OutputTypesUnion,
      SearchEntitiesOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = SearchEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchEntitiesInput,
    SearchEntitiesOutput,
    Blob
  >();

  constructor(readonly input: SearchEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchEntitiesInput, SearchEntitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchEntitiesInput, SearchEntitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
