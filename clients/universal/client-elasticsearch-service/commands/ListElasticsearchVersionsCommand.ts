import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListElasticsearchVersions } from "../model/ListElasticsearchVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListElasticsearchVersionsInput } from "../types/ListElasticsearchVersionsInput";
import { ListElasticsearchVersionsOutput } from "../types/ListElasticsearchVersionsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/ListElasticsearchVersionsInput";
export * from "../types/ListElasticsearchVersionsOutput";
export * from "../types/ListElasticsearchVersionsExceptionsUnion";

export class ListElasticsearchVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListElasticsearchVersionsInput,
      OutputTypesUnion,
      ListElasticsearchVersionsOutput,
      ElasticsearchServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListElasticsearchVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListElasticsearchVersionsInput,
    ListElasticsearchVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListElasticsearchVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListElasticsearchVersionsInput,
    ListElasticsearchVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListElasticsearchVersionsInput, ListElasticsearchVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
