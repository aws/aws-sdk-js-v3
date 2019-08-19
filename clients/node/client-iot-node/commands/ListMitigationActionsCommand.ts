import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListMitigationActions } from "../model/operations/ListMitigationActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMitigationActionsInput } from "../types/ListMitigationActionsInput";
import { ListMitigationActionsOutput } from "../types/ListMitigationActionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListMitigationActionsInput";
export * from "../types/ListMitigationActionsOutput";
export * from "../types/ListMitigationActionsExceptionsUnion";

export class ListMitigationActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMitigationActionsInput,
      OutputTypesUnion,
      ListMitigationActionsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListMitigationActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMitigationActionsInput,
    ListMitigationActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListMitigationActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMitigationActionsInput,
    ListMitigationActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMitigationActionsInput, ListMitigationActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
