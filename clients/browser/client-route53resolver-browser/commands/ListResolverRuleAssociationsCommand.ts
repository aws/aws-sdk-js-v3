import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResolverRuleAssociations } from "../model/ListResolverRuleAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolverRuleAssociationsInput } from "../types/ListResolverRuleAssociationsInput";
import { ListResolverRuleAssociationsOutput } from "../types/ListResolverRuleAssociationsOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/ListResolverRuleAssociationsInput";
export * from "../types/ListResolverRuleAssociationsOutput";
export * from "../types/ListResolverRuleAssociationsExceptionsUnion";

export class ListResolverRuleAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolverRuleAssociationsInput,
      OutputTypesUnion,
      ListResolverRuleAssociationsOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = ListResolverRuleAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolverRuleAssociationsInput,
    ListResolverRuleAssociationsOutput,
    Blob
  >();

  constructor(readonly input: ListResolverRuleAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResolverRuleAssociationsInput,
    ListResolverRuleAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListResolverRuleAssociationsInput,
        ListResolverRuleAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
