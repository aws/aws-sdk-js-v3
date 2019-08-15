import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStateMachines } from "../model/operations/ListStateMachines";
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
      Blob
    > {
  readonly model = ListStateMachines;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStateMachinesInput,
    ListStateMachinesOutput,
    Blob
  >();

  constructor(readonly input: ListStateMachinesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
