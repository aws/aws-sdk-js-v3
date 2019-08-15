import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListElasticsearchInstanceTypes } from "../model/operations/ListElasticsearchInstanceTypes";
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
      _stream.Readable
    > {
  readonly model = ListElasticsearchInstanceTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListElasticsearchInstanceTypesInput,
    ListElasticsearchInstanceTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListElasticsearchInstanceTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
