import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGraphqlApi } from "../model/operations/GetGraphqlApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGraphqlApiInput } from "../types/GetGraphqlApiInput";
import { GetGraphqlApiOutput } from "../types/GetGraphqlApiOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetGraphqlApiInput";
export * from "../types/GetGraphqlApiOutput";
export * from "../types/GetGraphqlApiExceptionsUnion";

export class GetGraphqlApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGraphqlApiInput,
      OutputTypesUnion,
      GetGraphqlApiOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetGraphqlApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGraphqlApiInput,
    GetGraphqlApiOutput,
    Blob
  >();

  constructor(readonly input: GetGraphqlApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGraphqlApiInput, GetGraphqlApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGraphqlApiInput, GetGraphqlApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
