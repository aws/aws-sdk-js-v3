import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCommandInvocation } from "../model/GetCommandInvocation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCommandInvocationInput } from "../types/GetCommandInvocationInput";
import { GetCommandInvocationOutput } from "../types/GetCommandInvocationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetCommandInvocationInput";
export * from "../types/GetCommandInvocationOutput";
export * from "../types/GetCommandInvocationExceptionsUnion";

export class GetCommandInvocationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCommandInvocationInput,
      OutputTypesUnion,
      GetCommandInvocationOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCommandInvocation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCommandInvocationInput,
    GetCommandInvocationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCommandInvocationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCommandInvocationInput,
    GetCommandInvocationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCommandInvocationInput, GetCommandInvocationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
