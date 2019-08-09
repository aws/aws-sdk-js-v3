import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = ListGraphqlApis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGraphqlApisInput,
    ListGraphqlApisOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGraphqlApisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
