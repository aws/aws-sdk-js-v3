import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResolverRule } from "../model/GetResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverRuleInput } from "../types/GetResolverRuleInput";
import { GetResolverRuleOutput } from "../types/GetResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/GetResolverRuleInput";
export * from "../types/GetResolverRuleOutput";
export * from "../types/GetResolverRuleExceptionsUnion";

export class GetResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverRuleInput,
      OutputTypesUnion,
      GetResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverRuleInput,
    GetResolverRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResolverRuleInput, GetResolverRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResolverRuleInput, GetResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
