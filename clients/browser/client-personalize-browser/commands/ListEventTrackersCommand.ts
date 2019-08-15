import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEventTrackers } from "../model/operations/ListEventTrackers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEventTrackersInput } from "../types/ListEventTrackersInput";
import { ListEventTrackersOutput } from "../types/ListEventTrackersOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListEventTrackersInput";
export * from "../types/ListEventTrackersOutput";
export * from "../types/ListEventTrackersExceptionsUnion";

export class ListEventTrackersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEventTrackersInput,
      OutputTypesUnion,
      ListEventTrackersOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = ListEventTrackers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEventTrackersInput,
    ListEventTrackersOutput,
    Blob
  >();

  constructor(readonly input: ListEventTrackersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEventTrackersInput, ListEventTrackersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEventTrackersInput, ListEventTrackersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
