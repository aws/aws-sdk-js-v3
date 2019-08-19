import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWorkGroups } from "../model/operations/ListWorkGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkGroupsInput } from "../types/ListWorkGroupsInput";
import { ListWorkGroupsOutput } from "../types/ListWorkGroupsOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/ListWorkGroupsInput";
export * from "../types/ListWorkGroupsOutput";
export * from "../types/ListWorkGroupsExceptionsUnion";

export class ListWorkGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkGroupsInput,
      OutputTypesUnion,
      ListWorkGroupsOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = ListWorkGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkGroupsInput,
    ListWorkGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListWorkGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWorkGroupsInput, ListWorkGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWorkGroupsInput, ListWorkGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
