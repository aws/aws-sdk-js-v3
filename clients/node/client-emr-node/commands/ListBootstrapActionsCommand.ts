import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBootstrapActions } from "../model/ListBootstrapActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBootstrapActionsInput } from "../types/ListBootstrapActionsInput";
import { ListBootstrapActionsOutput } from "../types/ListBootstrapActionsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListBootstrapActionsInput";
export * from "../types/ListBootstrapActionsOutput";
export * from "../types/ListBootstrapActionsExceptionsUnion";

export class ListBootstrapActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBootstrapActionsInput,
      OutputTypesUnion,
      ListBootstrapActionsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBootstrapActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBootstrapActionsInput,
    ListBootstrapActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBootstrapActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBootstrapActionsInput,
    ListBootstrapActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBootstrapActionsInput, ListBootstrapActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
