import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListActivities } from "../model/ListActivities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActivitiesInput } from "../types/ListActivitiesInput";
import { ListActivitiesOutput } from "../types/ListActivitiesOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/ListActivitiesInput";
export * from "../types/ListActivitiesOutput";
export * from "../types/ListActivitiesExceptionsUnion";

export class ListActivitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActivitiesInput,
      OutputTypesUnion,
      ListActivitiesOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = ListActivities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActivitiesInput,
    ListActivitiesOutput,
    Blob
  >();

  constructor(readonly input: ListActivitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<ListActivitiesInput, ListActivitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListActivitiesInput, ListActivitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
