import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGraphqlApis } from "../model/ListGraphqlApis";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGraphqlApisInput } from "../types/ListGraphqlApisInput";
import { ListGraphqlApisOutput } from "../types/ListGraphqlApisOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListGraphqlApisInput";
export * from "../types/ListGraphqlApisOutput";
export * from "../types/ListGraphqlApisExceptionsUnion";

export class ListGraphqlApisCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGraphqlApisInput,
      OutputTypesUnion,
      ListGraphqlApisOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListGraphqlApis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGraphqlApisInput,
    ListGraphqlApisOutput,
    Uint8Array
  >();

  constructor(readonly input: ListGraphqlApisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGraphqlApisInput, ListGraphqlApisOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGraphqlApisInput, ListGraphqlApisOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
