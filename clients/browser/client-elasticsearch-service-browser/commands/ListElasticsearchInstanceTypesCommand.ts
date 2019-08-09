import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListElasticsearchInstanceTypes } from "../model/ListElasticsearchInstanceTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListElasticsearchInstanceTypesInput } from "../types/ListElasticsearchInstanceTypesInput";
import { ListElasticsearchInstanceTypesOutput } from "../types/ListElasticsearchInstanceTypesOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/ListElasticsearchInstanceTypesInput";
export * from "../types/ListElasticsearchInstanceTypesOutput";
export * from "../types/ListElasticsearchInstanceTypesExceptionsUnion";

export class ListElasticsearchInstanceTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListElasticsearchInstanceTypesInput,
      OutputTypesUnion,
      ListElasticsearchInstanceTypesOutput,
      ElasticsearchServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListElasticsearchInstanceTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListElasticsearchInstanceTypesInput,
    ListElasticsearchInstanceTypesOutput,
    Blob
  >();

  constructor(readonly input: ListElasticsearchInstanceTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListElasticsearchInstanceTypesInput,
    ListElasticsearchInstanceTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListElasticsearchInstanceTypesInput,
        ListElasticsearchInstanceTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
