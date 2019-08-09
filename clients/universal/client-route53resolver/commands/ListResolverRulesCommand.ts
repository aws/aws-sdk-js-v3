import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResolverRules } from "../model/ListResolverRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolverRulesInput } from "../types/ListResolverRulesInput";
import { ListResolverRulesOutput } from "../types/ListResolverRulesOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/ListResolverRulesInput";
export * from "../types/ListResolverRulesOutput";
export * from "../types/ListResolverRulesExceptionsUnion";

export class ListResolverRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolverRulesInput,
      OutputTypesUnion,
      ListResolverRulesOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListResolverRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolverRulesInput,
    ListResolverRulesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListResolverRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<ListResolverRulesInput, ListResolverRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResolverRulesInput, ListResolverRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
