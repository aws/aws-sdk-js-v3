import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResolverRulePolicy } from "../model/GetResolverRulePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverRulePolicyInput } from "../types/GetResolverRulePolicyInput";
import { GetResolverRulePolicyOutput } from "../types/GetResolverRulePolicyOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/GetResolverRulePolicyInput";
export * from "../types/GetResolverRulePolicyOutput";
export * from "../types/GetResolverRulePolicyExceptionsUnion";

export class GetResolverRulePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverRulePolicyInput,
      OutputTypesUnion,
      GetResolverRulePolicyOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResolverRulePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverRulePolicyInput,
    GetResolverRulePolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResolverRulePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResolverRulePolicyInput,
    GetResolverRulePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResolverRulePolicyInput, GetResolverRulePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
