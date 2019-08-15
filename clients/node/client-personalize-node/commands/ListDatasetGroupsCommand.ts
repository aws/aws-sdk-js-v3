import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDatasetGroups } from "../model/operations/ListDatasetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDatasetGroupsInput } from "../types/ListDatasetGroupsInput";
import { ListDatasetGroupsOutput } from "../types/ListDatasetGroupsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListDatasetGroupsInput";
export * from "../types/ListDatasetGroupsOutput";
export * from "../types/ListDatasetGroupsExceptionsUnion";

export class ListDatasetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDatasetGroupsInput,
      OutputTypesUnion,
      ListDatasetGroupsOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDatasetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDatasetGroupsInput,
    ListDatasetGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDatasetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDatasetGroupsInput, ListDatasetGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDatasetGroupsInput, ListDatasetGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
