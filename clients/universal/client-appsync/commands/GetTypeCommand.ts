import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetType } from "../model/GetType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTypeInput } from "../types/GetTypeInput";
import { GetTypeOutput } from "../types/GetTypeOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetTypeInput";
export * from "../types/GetTypeOutput";
export * from "../types/GetTypeExceptionsUnion";

export class GetTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTypeInput,
      OutputTypesUnion,
      GetTypeOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTypeInput,
    GetTypeOutput,
    Uint8Array
  >();

  constructor(readonly input: GetTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTypeInput, GetTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTypeInput, GetTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
