import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListInstanceGroups } from "../model/operations/ListInstanceGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInstanceGroupsInput } from "../types/ListInstanceGroupsInput";
import { ListInstanceGroupsOutput } from "../types/ListInstanceGroupsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListInstanceGroupsInput";
export * from "../types/ListInstanceGroupsOutput";
export * from "../types/ListInstanceGroupsExceptionsUnion";

export class ListInstanceGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInstanceGroupsInput,
      OutputTypesUnion,
      ListInstanceGroupsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListInstanceGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInstanceGroupsInput,
    ListInstanceGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListInstanceGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInstanceGroupsInput,
    ListInstanceGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInstanceGroupsInput, ListInstanceGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
