import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStateMachines } from "../model/ListStateMachines";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStateMachinesInput } from "../types/ListStateMachinesInput";
import { ListStateMachinesOutput } from "../types/ListStateMachinesOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/ListStateMachinesInput";
export * from "../types/ListStateMachinesOutput";
export * from "../types/ListStateMachinesExceptionsUnion";

export class ListStateMachinesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStateMachinesInput,
      OutputTypesUnion,
      ListStateMachinesOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStateMachines;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStateMachinesInput,
    ListStateMachinesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStateMachinesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStateMachinesInput, ListStateMachinesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStateMachinesInput, ListStateMachinesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
