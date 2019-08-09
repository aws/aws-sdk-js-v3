import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpgradeElasticsearchDomain } from "../model/UpgradeElasticsearchDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpgradeElasticsearchDomainInput } from "../types/UpgradeElasticsearchDomainInput";
import { UpgradeElasticsearchDomainOutput } from "../types/UpgradeElasticsearchDomainOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/UpgradeElasticsearchDomainInput";
export * from "../types/UpgradeElasticsearchDomainOutput";
export * from "../types/UpgradeElasticsearchDomainExceptionsUnion";

export class UpgradeElasticsearchDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpgradeElasticsearchDomainInput,
      OutputTypesUnion,
      UpgradeElasticsearchDomainOutput,
      ElasticsearchServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpgradeElasticsearchDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpgradeElasticsearchDomainInput,
    UpgradeElasticsearchDomainOutput,
    Uint8Array
  >();

  constructor(readonly input: UpgradeElasticsearchDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpgradeElasticsearchDomainInput,
    UpgradeElasticsearchDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpgradeElasticsearchDomainInput,
        UpgradeElasticsearchDomainOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
