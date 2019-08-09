import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFleets } from "../model/ListFleets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFleetsInput } from "../types/ListFleetsInput";
import { ListFleetsOutput } from "../types/ListFleetsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/ListFleetsInput";
export * from "../types/ListFleetsOutput";
export * from "../types/ListFleetsExceptionsUnion";

export class ListFleetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFleetsInput,
      OutputTypesUnion,
      ListFleetsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = ListFleets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFleetsInput,
    ListFleetsOutput,
    Blob
  >();

  constructor(readonly input: ListFleetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFleetsInput, ListFleetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFleetsInput, ListFleetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
