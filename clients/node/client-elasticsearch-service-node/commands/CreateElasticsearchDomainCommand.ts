import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateElasticsearchDomain } from "../model/operations/CreateElasticsearchDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateElasticsearchDomainInput } from "../types/CreateElasticsearchDomainInput";
import { CreateElasticsearchDomainOutput } from "../types/CreateElasticsearchDomainOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/CreateElasticsearchDomainInput";
export * from "../types/CreateElasticsearchDomainOutput";
export * from "../types/CreateElasticsearchDomainExceptionsUnion";

export class CreateElasticsearchDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateElasticsearchDomainInput,
      OutputTypesUnion,
      CreateElasticsearchDomainOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateElasticsearchDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateElasticsearchDomainInput,
    CreateElasticsearchDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateElasticsearchDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateElasticsearchDomainInput,
    CreateElasticsearchDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateElasticsearchDomainInput, CreateElasticsearchDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
