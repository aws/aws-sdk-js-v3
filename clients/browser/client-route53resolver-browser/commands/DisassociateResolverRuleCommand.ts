import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateResolverRule } from "../model/DisassociateResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateResolverRuleInput } from "../types/DisassociateResolverRuleInput";
import { DisassociateResolverRuleOutput } from "../types/DisassociateResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/DisassociateResolverRuleInput";
export * from "../types/DisassociateResolverRuleOutput";
export * from "../types/DisassociateResolverRuleExceptionsUnion";

export class DisassociateResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateResolverRuleInput,
      OutputTypesUnion,
      DisassociateResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateResolverRuleInput,
    DisassociateResolverRuleOutput,
    Blob
  >();

  constructor(readonly input: DisassociateResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateResolverRuleInput,
    DisassociateResolverRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateResolverRuleInput, DisassociateResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
