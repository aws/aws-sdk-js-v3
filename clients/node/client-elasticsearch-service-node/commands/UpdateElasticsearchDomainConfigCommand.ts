import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateElasticsearchDomainConfig } from "../model/UpdateElasticsearchDomainConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateElasticsearchDomainConfigInput } from "../types/UpdateElasticsearchDomainConfigInput";
import { UpdateElasticsearchDomainConfigOutput } from "../types/UpdateElasticsearchDomainConfigOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/UpdateElasticsearchDomainConfigInput";
export * from "../types/UpdateElasticsearchDomainConfigOutput";
export * from "../types/UpdateElasticsearchDomainConfigExceptionsUnion";

export class UpdateElasticsearchDomainConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateElasticsearchDomainConfigInput,
      OutputTypesUnion,
      UpdateElasticsearchDomainConfigOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateElasticsearchDomainConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateElasticsearchDomainConfigInput,
    UpdateElasticsearchDomainConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateElasticsearchDomainConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateElasticsearchDomainConfigInput,
    UpdateElasticsearchDomainConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateElasticsearchDomainConfigInput,
        UpdateElasticsearchDomainConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
