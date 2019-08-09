import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourceConfigHistory } from "../model/GetResourceConfigHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceConfigHistoryInput } from "../types/GetResourceConfigHistoryInput";
import { GetResourceConfigHistoryOutput } from "../types/GetResourceConfigHistoryOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetResourceConfigHistoryInput";
export * from "../types/GetResourceConfigHistoryOutput";
export * from "../types/GetResourceConfigHistoryExceptionsUnion";

export class GetResourceConfigHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceConfigHistoryInput,
      OutputTypesUnion,
      GetResourceConfigHistoryOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResourceConfigHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceConfigHistoryInput,
    GetResourceConfigHistoryOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResourceConfigHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceConfigHistoryInput,
    GetResourceConfigHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceConfigHistoryInput, GetResourceConfigHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
