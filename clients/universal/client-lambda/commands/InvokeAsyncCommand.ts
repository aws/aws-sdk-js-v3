import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InvokeAsync } from "../model/InvokeAsync";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InvokeAsyncInput } from "../types/InvokeAsyncInput";
import { InvokeAsyncOutput } from "../types/InvokeAsyncOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/InvokeAsyncInput";
export * from "../types/InvokeAsyncOutput";
export * from "../types/InvokeAsyncExceptionsUnion";

export class InvokeAsyncCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InvokeAsyncInput,
      OutputTypesUnion,
      InvokeAsyncOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InvokeAsync;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InvokeAsyncInput,
    InvokeAsyncOutput,
    Uint8Array
  >();

  constructor(readonly input: InvokeAsyncInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<InvokeAsyncInput, InvokeAsyncOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InvokeAsyncInput, InvokeAsyncOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
