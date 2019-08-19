import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutResolverRulePolicy } from "../model/operations/PutResolverRulePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutResolverRulePolicyInput } from "../types/PutResolverRulePolicyInput";
import { PutResolverRulePolicyOutput } from "../types/PutResolverRulePolicyOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/PutResolverRulePolicyInput";
export * from "../types/PutResolverRulePolicyOutput";
export * from "../types/PutResolverRulePolicyExceptionsUnion";

export class PutResolverRulePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutResolverRulePolicyInput,
      OutputTypesUnion,
      PutResolverRulePolicyOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = PutResolverRulePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutResolverRulePolicyInput,
    PutResolverRulePolicyOutput,
    Blob
  >();

  constructor(readonly input: PutResolverRulePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutResolverRulePolicyInput,
    PutResolverRulePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutResolverRulePolicyInput, PutResolverRulePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
