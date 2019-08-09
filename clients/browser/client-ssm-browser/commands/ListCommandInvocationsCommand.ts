import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCommandInvocations } from "../model/ListCommandInvocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCommandInvocationsInput } from "../types/ListCommandInvocationsInput";
import { ListCommandInvocationsOutput } from "../types/ListCommandInvocationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListCommandInvocationsInput";
export * from "../types/ListCommandInvocationsOutput";
export * from "../types/ListCommandInvocationsExceptionsUnion";

export class ListCommandInvocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCommandInvocationsInput,
      OutputTypesUnion,
      ListCommandInvocationsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = ListCommandInvocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCommandInvocationsInput,
    ListCommandInvocationsOutput,
    Blob
  >();

  constructor(readonly input: ListCommandInvocationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCommandInvocationsInput,
    ListCommandInvocationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCommandInvocationsInput, ListCommandInvocationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
