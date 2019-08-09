import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateGraphqlApi } from "../model/CreateGraphqlApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGraphqlApiInput } from "../types/CreateGraphqlApiInput";
import { CreateGraphqlApiOutput } from "../types/CreateGraphqlApiOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/CreateGraphqlApiInput";
export * from "../types/CreateGraphqlApiOutput";
export * from "../types/CreateGraphqlApiExceptionsUnion";

export class CreateGraphqlApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGraphqlApiInput,
      OutputTypesUnion,
      CreateGraphqlApiOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateGraphqlApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGraphqlApiInput,
    CreateGraphqlApiOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateGraphqlApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateGraphqlApiInput, CreateGraphqlApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGraphqlApiInput, CreateGraphqlApiOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
