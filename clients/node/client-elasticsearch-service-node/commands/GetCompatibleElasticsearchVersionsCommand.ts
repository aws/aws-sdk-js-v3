import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCompatibleElasticsearchVersions } from "../model/GetCompatibleElasticsearchVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCompatibleElasticsearchVersionsInput } from "../types/GetCompatibleElasticsearchVersionsInput";
import { GetCompatibleElasticsearchVersionsOutput } from "../types/GetCompatibleElasticsearchVersionsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/GetCompatibleElasticsearchVersionsInput";
export * from "../types/GetCompatibleElasticsearchVersionsOutput";
export * from "../types/GetCompatibleElasticsearchVersionsExceptionsUnion";

export class GetCompatibleElasticsearchVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCompatibleElasticsearchVersionsInput,
      OutputTypesUnion,
      GetCompatibleElasticsearchVersionsOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCompatibleElasticsearchVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCompatibleElasticsearchVersionsInput,
    GetCompatibleElasticsearchVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCompatibleElasticsearchVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCompatibleElasticsearchVersionsInput,
    GetCompatibleElasticsearchVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCompatibleElasticsearchVersionsInput,
        GetCompatibleElasticsearchVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
