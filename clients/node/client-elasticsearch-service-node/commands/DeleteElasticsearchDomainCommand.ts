import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteElasticsearchDomain } from "../model/operations/DeleteElasticsearchDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteElasticsearchDomainInput } from "../types/DeleteElasticsearchDomainInput";
import { DeleteElasticsearchDomainOutput } from "../types/DeleteElasticsearchDomainOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DeleteElasticsearchDomainInput";
export * from "../types/DeleteElasticsearchDomainOutput";
export * from "../types/DeleteElasticsearchDomainExceptionsUnion";

export class DeleteElasticsearchDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteElasticsearchDomainInput,
      OutputTypesUnion,
      DeleteElasticsearchDomainOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteElasticsearchDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteElasticsearchDomainInput,
    DeleteElasticsearchDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteElasticsearchDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteElasticsearchDomainInput,
    DeleteElasticsearchDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteElasticsearchDomainInput, DeleteElasticsearchDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
