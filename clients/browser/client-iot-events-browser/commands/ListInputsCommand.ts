import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInputs } from "../model/ListInputs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInputsInput } from "../types/ListInputsInput";
import { ListInputsOutput } from "../types/ListInputsOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/ListInputsInput";
export * from "../types/ListInputsOutput";
export * from "../types/ListInputsExceptionsUnion";

export class ListInputsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInputsInput,
      OutputTypesUnion,
      ListInputsOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = ListInputs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInputsInput,
    ListInputsOutput,
    Blob
  >();

  constructor(readonly input: ListInputsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListInputsInput, ListInputsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInputsInput, ListInputsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
