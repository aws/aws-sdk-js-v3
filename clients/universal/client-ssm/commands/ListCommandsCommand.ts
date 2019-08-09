import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCommands } from "../model/ListCommands";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCommandsInput } from "../types/ListCommandsInput";
import { ListCommandsOutput } from "../types/ListCommandsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListCommandsInput";
export * from "../types/ListCommandsOutput";
export * from "../types/ListCommandsExceptionsUnion";

export class ListCommandsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCommandsInput,
      OutputTypesUnion,
      ListCommandsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListCommands;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCommandsInput,
    ListCommandsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListCommandsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListCommandsInput, ListCommandsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCommandsInput, ListCommandsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
