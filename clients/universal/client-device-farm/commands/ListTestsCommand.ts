import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTests } from "../model/ListTests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTestsInput } from "../types/ListTestsInput";
import { ListTestsOutput } from "../types/ListTestsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListTestsInput";
export * from "../types/ListTestsOutput";
export * from "../types/ListTestsExceptionsUnion";

export class ListTestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTestsInput,
      OutputTypesUnion,
      ListTestsOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTestsInput,
    ListTestsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTestsInput, ListTestsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTestsInput, ListTestsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
