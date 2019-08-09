import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResolversByFunction } from "../model/ListResolversByFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolversByFunctionInput } from "../types/ListResolversByFunctionInput";
import { ListResolversByFunctionOutput } from "../types/ListResolversByFunctionOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListResolversByFunctionInput";
export * from "../types/ListResolversByFunctionOutput";
export * from "../types/ListResolversByFunctionExceptionsUnion";

export class ListResolversByFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolversByFunctionInput,
      OutputTypesUnion,
      ListResolversByFunctionOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListResolversByFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolversByFunctionInput,
    ListResolversByFunctionOutput,
    Uint8Array
  >();

  constructor(readonly input: ListResolversByFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResolversByFunctionInput,
    ListResolversByFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResolversByFunctionInput, ListResolversByFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
